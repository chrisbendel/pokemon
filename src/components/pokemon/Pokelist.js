import React, { Component } from 'react';
import P from './../../Pokemon';
import Pokecard from './Pokecard';
import './Pokemon.css';
import { Row, Col } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import Infinite from 'react-infinite';

export default class Pokelist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      offset: 0,
      total: 0,
      infiniteLoading: false
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    const options = {
      limit: 20,
      offset: 0
    }

    P.getPokemonsList(options).then(data => {
      console.log(data);
      this.setState({
        pokemon: data.results,
        total: data.count
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.state.total && (this.state.pokemon.length < this.state.total)
    ) {
      this.fetchMore()
    }
  }

  renderPokecards = pokemonList => {
    return pokemonList.map(pokemon => {
      return (
        <Col key={pokemon.name} sm="4">
          <Pokecard name={pokemon.name}/>
        </Col>
      );
    });
  }

  fetchMore = () => {
    this.setState({infiniteLoading: true});
    const options = {
      limit: 20,
      offset: this.state.offset + 20
    }

    P.getPokemonsList(options).then(pokemon => {
      this.setState({
        pokemon: this.state.pokemon.concat(pokemon.results),
        offset: this.state.offset + 20,
        infiniteLoading: false
      });
    });
  }

  render() {
    const pokemon = this.state.pokemon;

    return (
      <Row id="pokelist-row" className="pokelist">
        {this.renderPokecards(pokemon)}
      </Row>
    );
  }
}