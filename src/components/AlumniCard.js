import React from 'react';
import { Link } from 'react-router-dom';

import linkedin from '../img/linkedin.png';


function AlumniCard(props) {
  return (
    <div className="result-card columns is-flex is-vertical-top is-horizontal-center">

      <div className="column is-3 is-mobile">
        <figure className="image is-64x64">
          <img className="is-rounded" src={props.image} alt="profile picture" />
        </figure>
      </div>

      <div className="column is-3 is-mobile">
        <h3>{props.firstName} {props.lastName}</h3>
        <p>{props.currentRole}</p>
        <p>{props.currentCity}</p>
      </div>

      <div className="column is-3 is-mobile">
        <p>{props.bootcamp}</p>
        <p>{props.campus}</p>
        <p>{props.cohort}</p>
      </div>

      <div className="column is-3 is-mobile is-flex is-vertical-center">
        <Link to={`/alumni/${props._id}`}>
          <button className="button is-small is-outlined">See</button>
        </Link>
        <Link to={props.linkedinUrl}>
          <figure className="image is-48x48">
            <img className="is-rounded" src={linkedin} alt="linkedin icon" />
          </figure>
        </Link>
      </div>

    </div>
  )
}

export default AlumniCard;
