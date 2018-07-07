import React, { Component } from 'react';
import {getAllPokemon} from './../../api/pokemon';
import Pokecard from './Pokecard';

export default class Pokelist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    }
  }
  
  componentDidMount() {
    getAllPokemon().then(pokemon => {
      this.setState({
        pokemon: pokemon
      })
    });
  }

  renderPokecards = pokemonList => {
    return pokemonList.map(pokemon => {
      return <Pokecard key={pokemon.name} name={pokemon.name}/>
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
