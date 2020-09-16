import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

import ironhack from '../img/ironhack.png';
import InstructionsModal from './../components/InstructionsModal';

class Login extends Component {
  state = { 
    email: '', 
    password: '',
    checked: false, 
    formError: null
  };

  openInstructions = () => {
    const instructionsModal = document.getElementById('instructions-modal');
    instructionsModal.style.display = "block";
  }

  handleChange = event => {
    let { name, value } = event.target;
    if(name === "checked") value = !this.state.checked;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    if(!email || !password) 
      this.setState({ formError: "Please complete all the fields "})  
    else
      this.props.login({ email, password });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { email, password, checked, formError } = this.state;
    const { loginError } = this.props;  

    return (
      <div className="container">
        <section className="section anon-pages login-page">

          <div className="is-flex is-horizontal-center">
            <figure className="image is-128x128">
              <Link to={'/'}>
                <img src={ironhack} alt="Ironhack logo" />
              </Link>
            </figure>
          </div>

          <div className="column is-half-desktop is-offset-3-desktop is-two-thirds-tablet is-offset-2-tablet">
            <h1 className="title is-1 has-text-centered has-text-white">Login</h1>

            <div className="block has-text-centered">
              <p className="has-text-white" id="instructions" onClick={this.openInstructions}>
              <span className="icon"><i className="fa fa-info-circle"></i></span>
              Instructions</p>
            </div>

            <InstructionsModal />

            { loginError ? 
            <div className="notification is-danger has-text-white">
              <p>{formError ? formError : loginError}</p>
            </div>
            : null}
  
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
                    type={checked ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white">
                  <div className="control">
                    <input
                      name="checked"
                      type="checkbox"
                      defaultChecked={checked}
                      onChange={this.handleChange}
                    />{" "}
                    Show password
                  </div>
                </label>
              </div>

              <button type="submit" className="button is-large is-info is-fullwidth" style={{'marginTop': '8%'}}>Login</button>
            </form>
          
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
