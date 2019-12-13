import React from 'react';
import { Link } from 'react-router-dom';

function AlumniCard(props) {
  return (
    <div>
      {
        props.allAlumni.map( oneAlumni => {
          return (
            <div>
              <div>
                <h3>{oneAlumni.firstName} {oneAlumni.lastName}</h3>
                <p>{oneAlumni.currentRole}</p>
                <p>{oneAlumni.currentCity}</p>
              </div>
              <div>
                <p>{oneAlumni.bootcamp}</p>
                <p>{oneAlumni.campus}</p>
                <p>{oneAlumni.cohort}</p>
              </div>
              <div>
                <Link to={`/alumni/${oneAlumni._id}`}>
                  <button>See alumni</button>
                </Link>
                <p>{oneAlumni.campus}</p>
                <p>{oneAlumni.cohort}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default AlumniCard;
