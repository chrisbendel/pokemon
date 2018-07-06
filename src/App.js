import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import {history} from './History';
import Pokelist from './components/pokemon/Pokelist';
import Pokedetail from './components/pokemon/Pokedetail';
export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path='/' component={Pokelist}/>
          <Route exact path='/pokemon' component={Pokelist}/>
          <Route exact path='/pokemon/:id' component={Pokedetail}/>
        </div>
      </Router>
    );
  }
}
