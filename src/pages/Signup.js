import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class Signup extends Component {
  state = { 
    firstName: '', 
    lastName: '',
    email: '', 
    password: '' ,
    bootcamp: 'Web Development',
    campus: 'Barcelona', 
    cohort: 'oct-19',
    isAdmin: 'false' 
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin } = this.state;
    //  console.log('Signup -> form submit', { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin });
    this.props.signup({ firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin }) // props.signup is Provided by withAuth() and Context API
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />

          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />

          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <label>Bootcamp:</label>
          <select name="bootcamp" value={bootcamp} onChange={this.handleChange}>
            <option value="Web Development">Web Development</option>
            <option value="UX Design">UX Design</option>
            <option value="Data Analytics">Data Analytics</option>
          </select>

          <label>Campus:</label>
          <select name="campus" value={campus} onChange={this.handleChange}>
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

          <label>Cohort:</label>
          <select name="cohort" value={cohort} onChange={this.handleChange}>
            <option value="oct-19">Oct-19</option>
            <option value="jul-19">Jul-19</option>
            <option value="apr-19">Apr-19</option>
            <option value="jan-19">Jan-19</option>
            <option value="oct-18">Oct-18</option>
            <option value="jul-18">Jul-18</option>
            <option value="apr-18">Apr-18</option>
            <option value="jan-18">Jan-18</option>
          </select>

          <div style={{display: 'none'}}>
            <label>Is admin:</label>
            <input
              type="text"
              name="isAdmin"
              value={isAdmin}
              onChange={this.handleChange}
            />
          </div>

          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?</p>
        <Link to={'/login'}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
