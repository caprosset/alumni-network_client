import React from 'react';
import { Link } from 'react-router-dom';

import linkedin from '../img/linkedin.png';


function AlumniCard(props) {
  const { image, _id, firstName, lastName, currentCity, currentRole, bootcamp, campus, cohort, linkedinUrl} = props
  return (
    <div className="result-card columns is-flex is-vertical-top is-horizontal-center">

      <div className="column is-3 is-mobile">
        <Link to={`/alumni/${_id}`}>
          <figure className="image is-64x64">
            <img className="is-rounded" src={image} alt="user profile" />
          </figure>
        </Link>
      </div>

      <div className="column is-3 is-mobile">
        <Link to={`/alumni/${_id}`}>
          <p>{firstName} {lastName}</p>
        </Link>
        <p>{currentRole}</p>
        <p>{currentCity}</p>
      </div>

      <div className="column is-3 is-mobile">
        <p>{bootcamp}</p>
        <p>{campus}</p>
        <p>{cohort}</p>
      </div>

      <div className="column is-3 is-mobile is-flex is-vertical-center">
        <Link to={`/alumni/${_id}`}>
          <button className="button is-small is-outlined">See</button>
        </Link>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <figure className="image is-48x48">
            <img className="is-rounded" src={linkedin} alt="linkedin icon" />
          </figure>
        </a>
      </div>

    </div>
  )
}

export default AlumniCard;
