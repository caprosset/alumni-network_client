import React from 'react';
import { Link } from 'react-router-dom';

function AlumniCard(props) {
  return (
    <div key={props._id}>
        <div>
          <h3>{props.firstName} {props.lastName}</h3>
          <p>{props.currentRole}</p>
          <p>{props.currentCity}</p>
        </div>
        <div>
          <p>{props.bootcamp}</p>
          <p>{props.campus}</p>
          <p>{props.cohort}</p>
        </div>
        <div>
          <Link to={`/alumni/${props._id}`}>
            <button>See alumni</button>
          </Link>
        </div>
    </div>
  )
}

export default AlumniCard;
