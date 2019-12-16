import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Searchbar extends Component {
  state = {
    search: '',
    filter: 'Bootcamp'
  }

  handleInput = e => {
    let { value } = e.target;
    // console.log(name, value);
    this.setState( { search: value });
    this.props.filterByTerm(value);
  }

  handleFilter = e => {
    let { value } = e.target;
    // console.log(name, value);
    this.setState( { filter: value });
    this.props.filterByProperty(value);
  }

  render() {
    const { filter } = this.state;
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

          <label>Search by:</label>
          <select name="filter" value={filter} onChange={this.handleFilter}>
            <option value="bootcamp">Bootcamp</option>
            <option value="city">City</option>
            {
              this.props.match.path.includes('/alumni')
              ? <option value="cohort">Cohort</option>
              : null
            }
          </select> 
        </form>
      </div>
    ) 
  }    
}


export default withRouter(Searchbar);