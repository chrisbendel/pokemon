import React, { Component } from 'react';
import {getPokemonDetail} from './../../api/pokemon';
import {NavLink} from 'react-router-dom';
import './Pokedetail.css';

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

  // renderSprite = (_key) => {
  //   return(
  //     <img src={this.state.pokemon.sprites.front_default}/>     
  //   );
  // }

  renderAllSprites = () => {
    for(var p in this.state.pokemon.sprites){
      //console.log(this.state.pokemon.sprites[p])
      //this.renderSprite(p);
    }
  }

  render() {
    const pokemon = this.state.pokemon;
    console.log(pokemon);
    if (this.state.loading) {
      return <p>loading ...</p> 
    }
    
    return (
      <div className="container">
      <h1 className="main-title">{pokemon.name}</h1>
        <span className="left-column">
          <p>Poke#: {pokemon.id}</p>    
          <img className="main-image" src={pokemon.sprites.front_default}/>
          {this.renderTypes()}
        </span>
        <span className="right-column">
          <p>Weight: {pokemon.weight}</p>
        </span>
      </div>
    );
  }
}
