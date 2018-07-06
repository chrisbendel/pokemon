import React, { Component } from 'react';
import {getPokemonDetail} from './../../api/pokemon';
import {NavLink} from 'react-router-dom';
import './Pokedetails.css';

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

  renderTypes = () => {
    return this.state.pokemon.types.map(type => {
      return(
        <div style={{marginTop:"5px"}}> 
          <NavLink to={type.type.url}>{type.type.name}</NavLink>
        </div>
      );
    })
  }

  render() {
    const pokemon = this.state.pokemon;
    console.log(pokemon);
    if (this.state.loading) {
      return <p>loading ...</p> 
    }
    
    return (
      <div class="container">
        <h1>{pokemon.name}</h1>
        <p>Poke#: {pokemon.id}</p>    
        <img src={pokemon.sprites.front_default}/>
        {this.renderTypes()}
      </div>
    );
  }
}
