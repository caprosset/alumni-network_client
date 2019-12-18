import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class TopNav extends Component {

  render() {
    console.log('PROPSSSSS', this.props.match.path);
    return (
      <div className="navbar is-fixed-top">
        <div className="topnav is-fullwidth has-background-info is-flex is-vertical-center">
          <span className="icon is-size-3 has-text-white">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </span>&nbsp;&nbsp;&nbsp;
        {
          this.props.match.path.includes('/alumni') 
          ? <h4 className="title is-4"><Link className="has-text-white" to={`/alumni`}>Back to alumni search</Link></h4>
          : null
        }  
        {
          this.props.match.path.includes('/job')
          ? <h4 className="title is-4"><Link className="has-text-white" to={`/job`}>Back to jobs search</Link></h4>
          : null
        }
        {
          this.props.match.path.includes('/event')
          ? <h4 className="title is-4"><Link className="has-text-white" to={`/event`}>Back to events search</Link></h4>
          : null
        }
        {
          this.props.match.path.includes('/dashboard')
          ? <h4 className="title is-4"><Link to={`/alumni`}>Back to search</Link></h4>
          : null
        }
        </div>
      </div>
    );
  }
}

export default withRouter(TopNav);