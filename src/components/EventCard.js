import React from 'react';
import { Link } from 'react-router-dom';

function EventCard(props) {
  return (
    <div>
      {
        props.allEvents.map( oneEvent => {
          return (
            <div>
              <div>
                <h3>{oneEvent.title}</h3>
                <p>Date: {oneEvent.company}</p>
                <p>Location: {oneEvent.city}</p>
              </div>
              <div>
                <p>{oneEvent.bootcamp}</p>
              </div>
              <div>
                <Link to={`/event/${oneEvent._id}`}>
                  <button>See event</button>
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default EventCard;
