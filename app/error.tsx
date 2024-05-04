"use client";
import errorImg from "@/public/assets/ash.png";
import Image from "next/image";

export default function Error() {
  return (
    <main className="text-4xl text-center flex justify-center items-center flex-col relative z-[100] mt-[50px]">
      <h1>Error Error I Can&apos;t find the Pokemon please find them Ash!</h1>
      <p>
        Failted to Fetch <span className="text-red-600">(Catch)</span> API!
      </p>
      <Image
        src={errorImg}
        width={300}
        height={300}
        alt="Ash from Pokemon"
        className="absolute ml-[50px] z-[-1] mt-[600px]"
      />
    </main>
  );
}
