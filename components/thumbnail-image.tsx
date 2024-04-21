import { getPokemon } from "@/lib/pokemonlistApi";
import PokemonImage from "./pokemon-image";

interface PokemonCardProps {
  name: string;
}

export default async function ThumbnailImage({ name }: PokemonCardProps) {
  const pokemonObject = await getPokemon(name);

  return (
    <>
      <div className="m-4 relative w-80 h-80">
        <PokemonImage image={pokemonObject.sprites.front_default} name={name} />
      </div>
    </>
  );
}
