import React from 'react';
import { Link } from 'react-router-dom';

function JobCard(props) {
  return (
    <div key={props._id}>
      <div>
        <h3>{props.title}</h3>
        <p>{props.company}</p>
        <p>{props.city}</p>
      </div>
      <div>
        <p>{props.bootcamp}</p>
      </div>
      <div>
        <Link to={`/job/${props._id}`}>
          <button>See job</button>
        </Link>
      </div>
    </div>
  )
}

export default JobCard;
