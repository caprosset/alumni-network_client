import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

import ironhack from '../img/ironhack.png';


class Login extends Component {
  state = { 
    email: '', 
    password: '',
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { errorMessage } = this.props;  

    return (
      <div className="container">
        <section className="section anon-pages login-page">

          <div className="column is-flex is-horizontal-center">
            <figure className="image is-128x128">
              <Link to={'/'}>
                <img src={ironhack} alt="Ironhack logo" />
              </Link>
            </figure>
          </div>

          <div className="column is-half-desktop is-offset-3-desktop is-two-thirds-tablet is-offset-2-tablet is-two-thirds-mobile is-offset-2-mobile">
            <h1 className="title is-1 has-text-centered has-text-white">Login</h1>
  
            <form onSubmit={this.handleFormSubmit}>
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

              <button type="submit" className="button is-large is-info is-fullwidth" style={{'marginTop': '8%'}}>Login</button>
            </form>

            <div>
              { errorMessage ? <p>{errorMessage}</p> : null}
            </div>
          
            <div className="level-item auth-link has-text-white">
              <p>Don't have an account yet? 
                <Link className="has-text-info" to={'/signup'}>   Signup</Link>
              </p>
            </div>
          </div>

        </section>
      </div>
    );  
  }
}

export default withAuth(Login);
