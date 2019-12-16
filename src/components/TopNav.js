import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class TopNav extends Component {
 
  render() {
    console.log('PROPSSSSS', this.props.match.path);
    return (
      <div>      
          <div style={{ borderRadius: '5px', padding: '20px', background: '#686de0' }}>
            <Link to={`/alumni`}>Go back</Link>
          </div>
      </div>
    );
  }
}

export default withRouter(TopNav);