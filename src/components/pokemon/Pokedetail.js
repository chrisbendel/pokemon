import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import P from './../../Pokemon';
import './Pokedetail.css';
import Skeleton from 'react-loading-skeleton';
import {get} from 'lodash';

export default class Pokelist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: null
    }
  }
  
  componentDidMount() {
    const name = this.props.match.params.name;
    P.getPokemonByName(name).then(pokemon => {
      this.setState({
        pokemon: pokemon,
      });
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

    // if (!this.state.pokemon) {
    //   return <p>loading ...</p> 
    // }
    
    return (
      <div className="container">
      <h1 className="main-title">{get(pokemon, 'name', <Skeleton/>)}</h1>
        <span className="left-column">
          <p>Poke#: {get(pokemon, 'id', <Skeleton/>)}</p>    
          <img className="main-image" src={get(pokemon, 'sprites.default_front', <Skeleton/>)}/>
          {pokemon && this.renderTypes()}
        </span>
        <span className="right-column">
          <p>Weight: {get(pokemon, 'weight', <Skeleton/>)}</p>
        </span>
      </div>
    );
  }
}
