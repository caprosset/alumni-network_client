import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class SearchFilters extends Component {
  state = {
    bootcamp: 'all',
    city: 'all',
    cohort: 'all',
  }

  handleFilter = e => {
    let { name, value } = e.target;
    // console.log(name, value);
    this.setState({ [name]: value });
    this.props.filterByProperty(name, value);
  }


  render() {
    const { bootcamp, city, cohort } = this.state;
    return (
      <div>
        <form>
          <label>Search by:</label>
          <select name="bootcamp" value={bootcamp} onChange={this.handleFilter}>
            <option value="all">All bootcamps</option>
            <option value="Web Development">Web Development</option>
            <option value="UX Design">UX Design</option>
            <option value="Data Analytics">Data Analytics</option>
          </select>

          <select name="city" value={city} onChange={this.handleFilter}>
            <option value="all">All cities</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Madrid">Madrid</option>
            <option value="Paris">Paris</option>
            <option value="Lisbon">Lisbon</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Berlin">Berlin</option>
            <option value="Miami">Miami</option>
            <option value="Mexico City">Mexico City</option>
            <option value="Sao Paulo">Sao Paulo</option>
          </select>

          {
            this.props.match.path.includes('/alumni') ?
            <select name="cohort" value={cohort} onChange={this.handleFilter}>
              <option value="all">All cohorts</option>
              <option value="oct-19">Oct-19</option>
              <option value="jul-19">Jul-19</option>
              <option value="apr-19">Apr-19</option>
              <option value="jan-19">Jan-19</option>
              <option value="oct-18">Oct-18</option>
              <option value="jul-18">Jul-18</option>
              <option value="apr-18">Apr-18</option>
              <option value="jan-18">Jan-18</option>
            </select>
            : null
          }
        </form>
      </div>
    ) 
  }    
}


export default withRouter(SearchFilters);