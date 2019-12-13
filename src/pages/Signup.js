import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class Signup extends Component {
  state = { 
    firstName: '', 
    lastName: '',
    email: '', 
    password: '' ,
    bootcamp: '',
    campus: '', 
    cohort: '',
    isAdmin: '' 
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin } = this.state;
    //  console.log('Signup -> form submit', { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin });
    this.props.signup({ firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin }); // props.signup is Provided by withAuth() and Context API
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
          <input
            type="text"
            name="bootcamp"
            value={bootcamp}
            onChange={this.handleChange}
          />

          <label>Campus:</label>
          <input
            type="text"
            name="campus"
            value={campus}
            onChange={this.handleChange}
          />

          <label>Cohort:</label>
          <input
            type="text"
            name="cohort"
            value={cohort}
            onChange={this.handleChange}
          />

          <label>Is admin:</label>
          <input
            type="text"
            name="isAdmin"
            value={isAdmin}
            onChange={this.handleChange}
          />

          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?</p>
        <Link to={'/login'}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
