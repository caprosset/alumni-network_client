import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class BottomNav extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav className="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">
        <div className="navbar-menu is-active">
          <div className="field is-grouped">

            <div className="column has-text-info has-text-centered">
              <Link className="bottom-nav-link" to='/dashboard'>
                <span className="icon is-size-3">
                  <i className="fa fa-bookmark" aria-hidden="true"></i>
                </span>
                <p className="block">Saved</p>
              </Link>
            </div>

            <div className="column has-text-info has-text-centered">
              <Link className="bottom-nav-link" to='/event'>
                <span className="icon is-size-3">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                </span>
                <p className="block">Events</p>
              </Link>
            </div>

            <div className="column has-text-info has-text-centered">
              <Link className="bottom-nav-link" to='/alumni'>
                <span className="icon is-size-3">
                  <i className="fa fa-address-book" aria-hidden="true"></i>
                </span>
                <p className="block">Alumni</p>
              </Link>
            </div>

            <div className="column has-text-info has-text-centered">
              <Link className="bottom-nav-link" to='/job'>
                <span className="icon is-size-3">
                  <i className="fa fa-briefcase" aria-hidden="true"></i>
                </span>
                <p className="block">Jobs</p>
              </Link>
            </div>

            <div className="column has-text-info has-text-centered">
              <Link className="bottom-nav-link" to={`/alumni/${user._id}`}>
                <span className="icon is-size-3">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </span>
                <p className="block">Profile</p>
              </Link>
            </div>
              
          </div>
        </div>
      </nav>
    )
  }
}

export default withAuth(BottomNav);