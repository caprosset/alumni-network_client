import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class TopNav extends Component {

  render() {
    // console.log('PROPSSSSS', this.props);
    return (
      <div className="navbar is-fixed-top">
        <div className="topnav is-fullwidth has-background-info is-flex is-vertical-center">
          <span className="icon is-size-3 has-text-white">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </span>&nbsp;&nbsp;&nbsp;
        {
          this.props.match.path.includes('/alumni') 
          ? <h6 className="title is-6"><Link className="has-text-white" to={`/alumni`}>Back to alumni search</Link></h6>
          : null
        }  
        {
          this.props.match.path.includes('/job')
          ? <h6 className="title is-6"><Link className="has-text-white" to={`/job`}>Back to jobs search</Link></h6>
          : null
        }
        {
          this.props.match.path.includes('/event')
          ? <h6 className="title is-6"><Link className="has-text-white" to={`/event`}>Back to events search</Link></h6>
          : null
        }
        {
          this.props.match.path.includes('/dashboard')
          ? <h6 className="title is-6"><Link to={`/alumni`}>Back to search</Link></h6>
          : null
        }
        </div>
      </div>
    );
  }
}

export default withRouter(TopNav);