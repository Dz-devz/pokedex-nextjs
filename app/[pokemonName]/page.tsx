import PokemonImage from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { getPokemon } from "@/lib/pokemonlistApi";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;

  const pokemonObject = await getPokemon(pokemonName);

  return (
    <>
      <h1 className="text-4xl text-bold pt-4">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <div className="m-4 relative w-80 h-80">
        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
      </div>
      <h3 className="text-2xl text-bold mb-5">
        Weight: {pokemonObject.weight}
      </h3>
      <div className="flex-col">
        {pokemonObject.stats.map((statsObject: any) => {
          const statName = statsObject.stat.name;
          const statValue = statsObject.base_stat;
          const statNameUpperCase =
            statName.charAt(0).toUpperCase() + pokemonName.slice(1);
          return (
            <div
              className="flex items-stretch w-[500px]"
              key={statNameUpperCase}
            >
              <h3 className="p-3 w-2/4 text-[20px] text-bold">
                {statNameUpperCase}: {statValue}
              </h3>
              <Progress className="w-2/4 m-auto" value={statValue} />
            </div>
          );
        })}
      </div>
    </>
  );
}
