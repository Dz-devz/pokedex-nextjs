"use client";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useState } from "react";
import { PokemonCard } from "./pokemon-card";
import PokemonThumbnail from "./pokemon-thumbnail";
import { Input } from "./ui/input";

interface PokemonGridProps {
  name: string;
  id: number;
}

interface Props {
  pokemonList: PokemonGridProps[];
}

export function PokemonGrid({ pokemonList }: Props) {
  const [searchText, setSearchText] = useState<string>("");

  const searchFilter = (pokemonList: PokemonGridProps[]) => {
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
            onChange={(e: { target: { value: string } }) =>
              setSearchText(e.target.value)
            }
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">
          Choose Your Companion
        </h3>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-5 lg:text-left">
        {filteredPokemonList.map((pokemon, id) => {
          return (
            <div
              key={pokemon.name}
              className={`flex transition transform duration-[250ms] hover:scale-110 relative`}
            >
              <PokemonCard key={pokemon.id} name={pokemon.name} />
              <div className="transition transform duration-[250ms] hover:scale-110 flex flex-col mt-[4rem] ml-12 absolute opacity-0 hover:opacity-100">
                <Link href={pokemon.name}>
                  <PokemonThumbnail
                    index={pokemonList.findIndex(
                      (pokeList) => pokeList.name === pokemon.name
                    )}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
