import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
      <div className="is-flex is-vertical-center is-spaced-around searchnav">

        <div className="navbar-brand is-active">
          <figure className="image is-96x96">
          <Link to='/alumni'><img src={ironhack} alt="Ironhack logo" /></Link>
          </figure>
        </div>
        
        <div className="navbar-menu is-active" style={{'box-shadow': 'none', 'margin-right': '5%'}}>
          <form>
            <div className="field has-addons">
              <div className="control">
                <input className="input" 
                  placeholder="Search"
                  type="text"
                  name="search"
                  value={this.state.search} 
                  onChange={this.handleInput} 
                />
              </div>
              <div className="control">
                <button className="button is-info">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    ) 
  }    
}

export default withRouter(Searchbar);