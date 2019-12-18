import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <div className="tabs is-centered is-active">
        <ul>
          <Link to="/alumni">
            <li>Alumni</li>
          </Link>
          <Link to="/job">
            <li>Job offers</li>
          </Link>
          <Link to="/event">
            <li>Events</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Navbar;
