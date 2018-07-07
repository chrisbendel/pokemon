const Pokedex = require('pokeapi-js-wrapper');
const options = {
  protocol: 'https',
  versionPath: '/api/v2/',
  cache: true,
  timeout: 5*100000
}

const P = new Pokedex.Pokedex(options);
export default P;

// https://github.com/PokeAPI/pokeapi-js-wrapper#endpoints 
// wrapper so we don't have to write our own API