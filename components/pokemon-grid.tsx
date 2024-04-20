"use client";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { PokemonCard } from "./pokemon-card";
import { Input } from "./ui/input";

interface PokemonGridProps {
  pokemonList: any;
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search for your Pokemon.</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pokemonName">Pokemon Searcher</Label>
          <Input
            type="text"
            value={searchText}
            id="pokemonName"
            placeholder="Charizard, Bayleaf, etc."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        {filteredPokemonList.map((pokemon: any) => {
          return <PokemonCard key={pokemon.id} name={pokemon.name} />;
        })}
        <PokemonCard name="Pikachu" />
      </div>
    </>
  );
}
