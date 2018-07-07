import React, { Component } from 'react';
import {getPokemonDetail} from './../../api/pokemon';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import PokecardShell from './PokecardShell';

export default class Pokecard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: null
    }
  }
  
  componentDidMount() {
    getPokemonDetail(this.props.name).then(pokemon => {
      this.setState({
        pokemon: pokemon
      })
    });
  }

  render() {
    console.log(this.state.pokemon);
    return (
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    );
  }
}
