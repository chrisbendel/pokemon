import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const items = [
  {path: '/pokemon', title: 'Pokemon'},
  {path: '/tms', title: 'tms'}
]

export default class Header extends Component { 
  renderNavItems = () => {
    return items.map(item => {
      return (
        <NavItem>
          <NavLink key={item.title} to={item.path}>{item.title}</NavLink>
        </NavItem>
      );
    });
  }

  render() {
    return (
      <Nav vertical className="navbar-fixed-left">
        {this.renderNavItems()}
      </Nav>
    );
  }
}
