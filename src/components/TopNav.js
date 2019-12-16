import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class TopNav extends Component {

  render() {
    console.log('PROPSSSSS', this.props.match.path);
    return (
      <div style={{ borderRadius: '5px', padding: '20px', background: '#686de0' }}>
      {
        this.props.match.path.includes('/alumni') 
        ? 
        <div>
          <Link to={`/alumni`}>All alumni</Link>
        </div>
        : null
      }  
      {
        this.props.match.path.includes('/job')
        ? 
        <div>
          <Link to={`/job`}>All jobs</Link>
        </div>
        : null
      }
      {
        this.props.match.path.includes('/event')
        ? 
        <div>
          <Link to={`/event`}>All events</Link>
        </div>
        : null
      }
      {
        this.props.match.path.includes('/dashboard')
        ?
        <div>
          <Link to={`/alumni`}>Go back to Search</Link>
        </div>
        : null
      }
      </div>
    );
  }
}

export default withRouter(TopNav);