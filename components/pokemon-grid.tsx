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
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className=" text-4xl mb-5" htmlFor="pokemonName">
            Pokemon <span className="text-red-700">Finder</span>
          </Label>
          <Input
            type="text"
            value={searchText}
            id="pokemonName"
            placeholder="Pikachu, Pichu, Raichu, etc."
            onChange={(e: { target: { value: any } }) =>
              setSearchText(e.target.value)
            }
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">
          Choose Your Companion
        </h3>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-5 lg:text-left">
        {filteredPokemonList.map((pokemon: any) => {
          return (
            <div
              key={pokemon.name}
              className={`flex transition transform duration-[250ms] hover:scale-110`}
            >
              <PokemonCard key={pokemon.name} name={pokemon.name} />
            </div>
          );
        })}
      </div>
    </>
  );
}
