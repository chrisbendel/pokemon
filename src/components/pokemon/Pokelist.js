import React, { Component } from 'react';
import {getAllPokemon} from './../../api/pokemon';

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

  render() {
    return (
      <div>hello</div>
    );
  }
}
