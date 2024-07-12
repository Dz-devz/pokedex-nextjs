// get pokemon list collection from API

const fetchPokemon = "https://pokeapi.co/api/v2/";

export async function getPokemonList() {
  const response = await fetch(fetchPokemon + "pokemon?limit=250&offset=0");
  const data = await response.json();
  return data.results;
}

export async function getPokemon(name: string) {
  const response = await fetch(fetchPokemon + "pokemon/" + name);
  const data = await response.json();
  return data;
}

export async function getPokemonThumbnail(index: number) {
  const response = await fetch(fetchPokemon + "pokemon/" + index);
  const data = await response.json();
  return data;
}
