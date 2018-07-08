import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import P from './../../Pokemon';
import PokecardShell from './PokecardShell';
import {get} from 'lodash'
import Skeleton from 'react-loading-skeleton';
import {NavLink} from 'react-router-dom';
import {history} from './../../History.js';
import Type from './Type';
import PlaceHolder from './../../placeholder.png';


export default class Pokecard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: null
    }
  }
  
  componentDidMount() {
    P.getPokemonByName(this.props.name).then(pokemon => {
      console.log(pokemon);
      this.setState({
        pokemon: pokemon
      });
    });
  }

  renderMoves = () => {
    let moves = this.state.pokemon.moves.slice(0,3);
    console.log(moves);
    return moves.map(move => {
      console.log(move);
      return <span>{move.move.name},</span>
    }) 
  }

  renderPokemonDescription(){
    return(
      <p>
        {this.state.pokemon.name} is a {this.renderTypes()} type pokemon.
        It is found in the REGIONNAME region. It's starting moves
        are {this.renderMoves()}.
      </p>
    )

  }

  render() {
    return (
      <Card className="pokecard">
         <NavLink to={'/pokemon/' + get(this.state.pokemon, 'name')}>
          <CardImg top width="100%" src={this.state.pokemon? this.state.pokemon.sprites.front_default: PlaceHolder} alt="Card image cap" />
        </NavLink>
        <CardBody>
          <CardTitle>{get(this.state.pokemon, 'name', <Skeleton/>)}</CardTitle>
          <CardSubtitle>poke# {get(this.state.pokemon, 'id', <Skeleton width={40}/>)}</CardSubtitle>
          {this.state.pokemon? <Type types={this.state.pokemon.types}/>: <Skeleton/>}
          <Button onClick={() => {this.state.pokemon && history.push('/pokemon/' + this.state.pokemon.name)}} className='learn-more' block> Learn More</Button>
        </CardBody>
      </Card>
    );
  }
}
