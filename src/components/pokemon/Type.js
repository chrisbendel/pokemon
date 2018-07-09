import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import {Button} from 'reactstrap';

const colorMap = {
  grass: 'green',
  fire: 'red',
  poison: 'purple', 
  flying: 'indigo',
  water: 'blue',
  bug: 'darkGreen',
  normal: 'tan',
  ghost: 'darkOrchid',
  electric: 'gold',
  psychic: 'salmon',
  rock: 'peru',
}

export default class Type extends Component {
  constructor(props) {
    super(props);
  }
  

  renderTypes = (types) => {
    if(!types.length){
      return <Button><Skeleton/></Button>
    }
    else{
      return types.map(type => {
        const color = colorMap[type.type.name]
        return(
          <NavLink to='' className='type'>
            <Button style={{backgroundColor: color, borderColor: color}} >
              {type.type.name}       
            </Button>{' '}
          </NavLink>
        );
      })
    }
  }



  render() {
    return (
      <div className='type-container'>
        {this.renderTypes(this.props.types)}
      </div>
    );
  }
}
