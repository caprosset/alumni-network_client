import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <div className="tabs is-centered">
        <ul>
          <Link activeStyle="is-active" to="/alumni">
            <li>Alumni</li>
          </Link>
          <Link activeStyle="is-active" to="/job">
            <li>Job offers</li>
          </Link>
          <Link activeStyle="is-active" to="/event">
            <li>Events</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Navbar;
