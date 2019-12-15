import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class TopNav extends Component {
  render() {
    return (
      <div
        style={{ borderRadius: '5px', padding: '20px', background: '#686de0' }}>
        <button onClick={ () => this.props.history.goBack()}>Go back</button>
      </div>
    );
  }
}

export default TopNav;
