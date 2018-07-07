import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import {history} from './History';
import Pokelist from './components/pokemon/Pokelist';
import Pokedetail from './components/pokemon/Pokedetail';
import Header from './components/header/Header';
import {Container, Row, Col} from 'reactstrap';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Container fluid>
        <Row>
    {/* <div class="col-xs-4">
          <div class="col-xs-12" id="sticky-sidebar">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div class="col-xs-8" id="main">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div> */}
        <Col xs="2">
          <Col xs="12">
            <Header/>
          </Col>
        </Col>

        <Col xs="10">
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
