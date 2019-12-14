import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Splash extends Component {
  render() {
    return (
      <div>
        <h2>Keep in touch!</h2>
        <Link to={'/signup'}>
          <button>Signup</button>
        </Link>
        <Link to={'/login'}>
          <button>Login</button>
        </Link>
      </div>
    )
  }
}

export default Splash;