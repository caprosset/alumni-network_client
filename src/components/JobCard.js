import React from 'react';
import { Link } from 'react-router-dom';

function JobCard(props) {
  return (
    <div className="result-card columns is-flex is-vertical-top is-horizontal-center">
      
      <div className="column is-3 is-mobile">
        <figure className="image is-64x64">
          <img src={props.image} alt="Company logo" />
        </figure>
      </div>

      <div className="column is-3 is-mobile">
        <h3>{props.title}</h3>
        <p>{props.company}</p>
        <p>{props.city}</p>
      </div>

      <div className="column is-3 is-mobile">
        <p>{props.bootcamp}</p>
      </div>

      <div className="column is-3 is-mobile">
        <Link to={`/job/${props._id}`}>
          <button className="button is-small is-outlined">See job</button>
        </Link>
      </div>

    </div>
  )
}

export default JobCard;
