import React from 'react';
import { Link } from 'react-router-dom';

function EventCard(props) {
  console.log('EVENT PROPS', props);
  return (
    <div key={props._id}>
      <div>
        <h3>{props.title}</h3>
        <p>Date: {props.date}</p>
        <p>Location: {props.city}</p>
      </div>
      <div>
        <p>{props.bootcamp}</p>
      </div>
      <div>
        <Link to={`/event/${props._id}`}>
          <button>See event</button>
        </Link>
      </div>
    </div>
  )
}

export default EventCard;
