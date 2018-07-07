import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

const items = [
  {path: '/pokemon', title: 'Pokemon'},

]

export default class Header extends Component { 
  renderNavItems = () => {
    return items.map(item => {
      return (
        <NavLink key={item.title} to={item.path}>{item.title}</NavLink>
      );
    });
  }

  render() {
    return (
      <div className="sidenav">
        {this.renderNavItems()}
      </div>
    );
  }
}
