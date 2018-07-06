const base = 'https://pokeapi.co/api/v2/';

export const getAllPokemon = async () => {
  let data = await (await fetch(base + 'pokemon', {cache: "force-cache"})).json();
  return data.results;
}

export const getPokemonDetail = async (id) => {
  let data = await (await fetch(base + 'pokemon/' + id, {cache: "force-cache"})).json();
  return data;
}
