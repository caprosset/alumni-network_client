import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Search } from "../styles/elements";

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
      <Search>
        <div className="top-logo">
          <img src='../../public/img/ironhack.png' />
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
      </Search>
    ) 
  }    
}


export default withRouter(Searchbar);