import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SavedJobCard extends Component {
  render() {
    return (
      <div>
        <div className="saved-card columns is-flex is-vertical-center is-horizontal-center">

          <div className="column is-3 is-mobile">
            <p>
              <Link to={`/job/${this.props._id}`}>{this.props.title}</Link>
            </p>
          </div>
          
          <div className="column is-3 is-mobile">
            <p>{this.props.companyName}</p>
          </div>

          <div className="column is-3 is-mobile">
            <p>{this.props.city}</p>
          </div>

          <div className="column is-3 is-mobile">
            <button className="button is-small is-outlined" onClick={() => this.props.unsaveJob(this.props._id)}>Unsave</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SavedJobCard;