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
    isAdmin: 'false' 
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin } = this.state;
    //  console.log('Signup -> form submit', { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin });
    this.props.signup({ firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin }); // props.signup is Provided by withAuth() and Context API
  };

  handleChange = event => {
    const { name, value } = event.target;

    // var options = e.target.options;
    // for (var i = 0; i < options.length; i++) {
    //   if (options[i].selected) {
    //     const multiselectValue = [].push(options[i].value);
    //   }
    // }

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

          {/* <label>Bootcamp:</label>
          <select name="bootcamp" value={bootcamp} onChange={this.handleChange}>
            <option value={1}>Web Development</option>
            <option value={2}>UX Design</option>
            <option value={3}>Data Analytics</option>
          </select> */}

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
