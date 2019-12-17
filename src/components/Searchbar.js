import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ironhack from '../img/ironhack.png';


class Searchbar extends Component {
  state = {
    search: '',
  }

  handleInput = e => {
    let { value } = e.target;
    // console.log(name, value);
    this.setState( { search: value });
    this.props.filterByTerm(value);
  }


  render() {
    return (
      <div>
        <div className="top-logo">
          <img src={ironhack} width="50" />
        </div>
        <form>
          <input 
            placeholder="Search..."
            onChange={this.handleInput} 
            type="text" 
            name="search" 
            value={this.state.search} 
          />
        </form>
      </div>
    ) 
  }    
}


export default withRouter(Searchbar);