import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class BottomNav extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav className="navbar is-fixed-bottom has-background-white" role="navigation" aria-label="main navigation">
        <div className="navbar-menu is-active">
          <div className="field is-grouped">

            <div className="column bottom-icons has-text-centered">
              <NavLink className="bottom-icons" activeClassName="bottom-nav-link" to='/alumni' exact>
                <span className="icon is-size-3">
                  <i className="fa fa-address-book" aria-hidden="true"></i>
                </span>
                <p className="block">Alumni</p>
              </NavLink> 
            </div>


            <div className="column bottom-icons has-text-centered">
              <NavLink className="bottom-icons" activeClassName="bottom-nav-link" to='/event'>
                <span className="icon is-size-3">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                </span>
                <p className="block">Events</p>
              </NavLink>
            </div>

            <div className="column bottom-icons has-text-centered">
              <NavLink className="bottom-icons" activeClassName="bottom-nav-link" to='/dashboard'>
                <span className="icon is-size-3">
                {
                  user.isAdmin
                  ? <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  : <i className="fa fa-dashboard" aria-hidden="true"></i>
                } 
                </span>
                {
                  user.isAdmin
                  ? <p className="block">Post</p>
                  : <p className="block">Dashboard</p>
                }
              </NavLink>
            </div>

            <div className="column bottom-icons has-text-centered">
              <NavLink className="bottom-icons" activeClassName="bottom-nav-link" to='/job'>
                <span className="icon is-size-3">
                  <i className="fa fa-briefcase" aria-hidden="true"></i>
                </span>
                <p className="block">Jobs</p>
              </NavLink>
            </div>

            <div className="column has-text-centered">
              <NavLink className="bottom-icons" activeClassName="bottom-nav-link" to={`/alumni/${user._id}`} exact>
                <span className="icon is-size-3">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </span>
                <p className="block">Profile</p>
              </NavLink>
            </div>
              
          </div>
        </div>
      </nav>
    )
  }
}

export default withAuth(BottomNav);