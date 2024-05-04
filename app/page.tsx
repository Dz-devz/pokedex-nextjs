import { PokemonGrid } from "@/components/pokemon-grid";
import { getPokemonList } from "@/lib/pokemonlistApi";

export default async function Home() {
  const pokemonList = await getPokemonList();

  return <PokemonGrid pokemonList={pokemonList} />;
}
