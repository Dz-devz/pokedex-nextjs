import { PokemonGrid } from "@/components/pokemon-grid";
import { getPokemonList } from "@/lib/pokemonlistApi";

export default async function Home() {
  const pokemonList = await getPokemonList();

  // pokemonList.map((pokemon: any, index: any) => {
  //   console.log(index);
  // });

  return <PokemonGrid pokemonList={pokemonList} />;
}
