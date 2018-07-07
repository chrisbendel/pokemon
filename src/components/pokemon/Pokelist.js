import React, { Component } from 'react';
import P from './../../Pokemon';
import Pokecard from './Pokecard';
import './Pokemon.css';

export default class Pokelist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      offset: 0
    }
  }
  
  componentDidMount() {
    const options = {
      limit: 20,
      offset: this.state.offset
    }
    P.getPokemonsList(options).then(pokemon => {
      this.setState({
        pokemon: pokemon.results
      });
    });
  }

  renderPokecards = pokemonList => {
    console.log(pokemonList);
    return pokemonList.map(pokemon => {
      return <Pokecard key={pokemon.name} name={pokemon.name}/>;
    });
  }

  render() {
    return (
      <div>
        {this.renderPokecards(this.state.pokemon)}
      </div>
    );
  }
}
