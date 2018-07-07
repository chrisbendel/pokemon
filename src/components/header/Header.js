import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

const items = [
  {path: '/pokemon', title: 'Pokemon'},

]

export default class Pokelist extends Component { 
  renderItems = () => {
    return items.map(item => {
      return (
        <NavLink to={item.path}>{item.title}</NavLink>
      );
    });
  }

  render() {
    return (
      <div className="sidenav">
        {this.renderItems()}
      </div>
    );
  }
}
