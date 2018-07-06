import React, { Component } from 'react';
import {getPokemonDetail} from './../../api/pokemon';

export default class Pokelist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: null
    }
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;

    getPokemonDetail(id).then(pokemon => {
      this.setState({
        pokemon: pokemon
      })
    });
  }

  render() {
    console.log(this.state.pokemon);
    return (
      <div>hello</div>
    );
  }
}
