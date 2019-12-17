import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

import { Form, Button, Container } from "../styles/elements";
import { ThemeSplash } from '../styles/themes';


class Login extends Component {
  state = { 
    email: '', 
    password: '' 
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

    return (
      <ThemeSplash>
        <Container>
          <div>
            <img src='../../public/img/ironhack.png' alt="Logo Ironhack" width="150"/>
          </div>
          <h1>Login</h1>
          <Form onSubmit={this.handleFormSubmit}>
            <div>
              <input
                placeholder="Email"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>

            <Button splash type="submit">Login</Button>
          </Form>
          
          <p>Don't have an account yet?</p>
          <Link to={'/signup'}>Sign up</Link>
        </Container>
    </ThemeSplash>
    );  
  }
}

export default withAuth(Login);
