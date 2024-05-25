import Image from "next/image";

export default function PokemonThumbnail({ index }: { index: number }) {
  const pokeIndex = ("000" + (index + 1)).slice(-3);

  return (
    <Image
      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
      alt=""
      width={120}
      height={120}
    />
  );
}
