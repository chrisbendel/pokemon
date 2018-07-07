import React, { Component } from 'react';
import P from './../../Pokemon';
import Pokecard from './Pokecard';
import './Pokemon.css';
import { Row, Col } from 'reactstrap';

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
      return (
        <Col sm="3">
          <Pokecard key={pokemon.name} name={pokemon.name}/>
        </Col>
      );
    });
  }

  render() {
    return (
      <Row>
        {this.renderPokecards(this.state.pokemon)}
      </Row>
    );
  }
}
