import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class BottomNav extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <div><Link to='/dashboard'>Dashboard</Link></div>
        <div><Link to='/event'>Events</Link></div>
        <div><Link to='/alumni'>Alumni</Link></div>
        <div><Link to='/job'>Jobs</Link></div>
        <div><Link to={`/alumni/${user._id}`}>Profile</Link></div>
      </div>
    )
  }
}

export default withAuth(BottomNav);