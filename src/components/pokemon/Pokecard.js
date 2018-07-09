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
    const pokemon = this.state.pokemon; 

    return (
      <Card className="pokecard">
         <NavLink to={'/pokemon/' + get(pokemon, 'name')}>
          <CardImg top width="100%" className={pokemon &&'card-image'} src={pokemon? pokemon.sprites.front_default: PlaceHolder} alt="Card image cap" />
        </NavLink>
        <CardBody>
          <div>
            <div>
              <CardTitle>{get(pokemon, 'name', <Skeleton/>)}</CardTitle>
              <CardSubtitle>poke# {get(pokemon, 'id', <Skeleton width={40}/>)}</CardSubtitle>
            </div>
            <div>
              <Type types={pokemon?pokemon.types:[]}/>
            </div>
          </div>
          <Button onClick={() => {pokemon && history.push('/pokemon/' + pokemon.name)}} className='learn-more' block> Learn More</Button>
        </CardBody>
      </Card>
    );
  }
}
