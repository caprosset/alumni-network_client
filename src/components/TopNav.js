import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class TopNav extends Component {
  state = {
    userId: null
  }

  componentDidMount() {
    const { user, isLoggedin } = this.props;
    if(isLoggedin){
      this.setState({ userId: user._id }, () => console.log('STATE', this.state))
    }
  }

  render() {
    console.log('PROPS', this.props.user);
    const { user, logout, isLoggedin } = this.props;
    console.log('USER IDDDDD', user);
    return (
      <div>      
        {
          isLoggedin ? (
          <div style={{ borderRadius: '5px', padding: '20px', background: '#686de0' }}>
            <Link to={`/alumni/${this.state.userId}`}>{user.firstName} {user.lastName}</Link>
            <button onClick={logout}>Logout</button>
          </div>) 
          : null
        }
      </div>
    );
  }
}

export default withAuth(TopNav);
