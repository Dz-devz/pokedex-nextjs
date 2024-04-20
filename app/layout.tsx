import { ModeToggle } from "@/components/dark-mode";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo.png";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dz.dev Nostalgic PokeDex",
  description: "Created by Dz.dev in NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="flex min-h-screen flex-col items-center p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
              <Link href="/">
                <div className="flex items-center justify-center">
                  <Image
                    className="w-[80px] h-[80px]"
                    src={Logo}
                    alt="logo of pokedex"
                  />
                  <h2 className="text-2xl text-bold">
                    {""}
                    Poke
                    {""}
                    <span className=" text-red-700">Dex</span>
                  </h2>
                </div>
              </Link>
              <ModeToggle />
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
