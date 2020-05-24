import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

import ironhack from '../img/ironhack.png';


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

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin } = this.state;

    this.props.signup({ firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin }) 
  };

  render() {
    const { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin } = this.state;
    const { signupError } = this.props;
    
    return (  
      <div className="container">
        <section className="section anon-pages">
          
          <div className="column is-flex is-horizontal-center">
            <figure className="image is-128x128">
              <Link to={'/'}>
                <img src={ironhack} alt="Ironhack logo" />
              </Link>
            </figure>
          </div>

          <div className="column is-half-desktop is-offset-one-quarter-desktop is-two-thirds-tablet is-offset-2-tablet is-two-thirds-mobile is-offset-2-mobile">
            <h1 className="title is-1 has-text-centered has-text-white">Sign Up</h1>

            { signupError ? 
            <div className="notification is-danger has-text-white">
              <p>{signupError}</p> 
            </div>
            : null }
  
            <form onSubmit={this.handleFormSubmit}>
              <div className="field">
                <label className="label has-text-white">First name *</label>
                <div className="control">
                  <input className="input" 
                    placeholder="First name"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                  />
                  </div>
              </div>
  
              <div className="field">
                <label className="label has-text-white">Last name *</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Last name"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
  
              <div className="field">
                <label className="label has-text-white">Email *</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
  
              <div className="field">
                <label className="label has-text-white">Password *</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
  
              <div className="field">
                <label className="label has-text-white">Bootcamp *</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select name="bootcamp" value={bootcamp} onChange={this.handleChange}>
                      <option value="Web Development">Web Development</option>
                      <option value="UX Design">UX Design</option>
                      <option value="Data Analytics">Data Analytics</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="field">
                <label className="label has-text-white">Campus *</label>
                <div className="control">
                  <div className="select is-fullwidth">
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
                  </div>
                </div>
              </div>
  
              <div className="field">
                <label className="label has-text-white">Cohort *</label>
                <div className="control">
                  <div className="select is-fullwidth">
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
                  </div>
                </div>
              </div>
  
              <div className="field" style={{'display': 'none'}}>
                <label className="label has-text-white">Is admin:</label>
                <div className="control">
                    <input className="input" 
                      type="text"
                      name="isAdmin"
                      value={isAdmin}
                      onChange={this.handleChange}
                    />
                </div>
              </div>
  
              <button type="submit" className="button is-large is-info is-fullwidth" style={{'marginTop': '8%'}}>Signup</button>
            </form>

            <div className="level-item auth-link has-text-white">
              <p>Already have account? 
                <Link className="has-text-info" to={'/login'}>   Login</Link>
              </p>
            </div>
          </div>
  
        </section>
      </div>
    );
  }
}

export default withAuth(Signup);
