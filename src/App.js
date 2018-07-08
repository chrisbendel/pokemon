import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import {history} from './History';
import Pokelist from './components/pokemon/Pokelist';
import Pokedetail from './components/pokemon/Pokedetail';
import Header from './components/header/Header';
import {Container, Row, Col} from 'reactstrap';
import './App.css';
import './components/pokemon/Pokemon.css';


export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Container fluid>
        <Row>
          <Col sm="2">
            <Col sm="12">
              <Header/>
            </Col>
          </Col>

          <Col sm="10">
            <Route exact path='/' component={Pokelist}/>
            <Route exact path='/pokemon' component={Pokelist}/>
            <Route exact path='/pokemon/:name' component={Pokedetail}/>
          </Col>
        </Row>
        </Container>
      </Router>
    );
  }
}
