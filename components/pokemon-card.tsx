import Link from "next/link";
interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <>
      <Link
        href={name}
        className="rounded-[50%] shadow-xl shadow-white border-[10px] bg-gradient-to-b from-[#FB1B1B] from-50% to-white to-50% m-3 px-5 py-4 transition-colors dark:border-black hover:border-gray-300 hover:bg-gray-100 hover:dark:border-gray-800 hover:dark:bg-neutral-800/30 w-[200px] h-[200px] relative"
        key={name + "card"}
      >
        <div className="rounded-[50%] w-[50px] h-[50px] absolute bg-black mt-[48.5px] ml-[41.5px]"></div>
        <div className="rounded-[50%] w-[30px] h-[30px] absolute bg-white mt-[58.5px] ml-[51px] ]"></div>
        <div className="rounded-[50%] w-[15px] h-[15px] absolute bg-black mt-[65.5px] ml-[58.5px] ]"></div>
        <div className="flex items-center justify-center mt-[8%]">
          <h2 className="text-2xl font-semibold">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
        </div>
      </Link>
    </>
  );
}
