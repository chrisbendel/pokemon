import React, { Component } from 'react';
import {getPokemonDetail} from './../../api/pokemon';

export default class Pokelist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: null,
      loading: true
    }
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;

    getPokemonDetail(id).then(pokemon => {
      this.setState({
        pokemon: pokemon,
        loading: false
      })
    });
  }

  render() {
    const pokemon = this.state.pokemon;
    if (this.state.loading) {
      return <p>loading ...</p> 
    }

    return (
      <div>
        <p>{pokemon.name}</p>
      </div>
    );
  }
}
