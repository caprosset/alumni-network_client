import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


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
        <form>
          <label></label>
          <input 
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