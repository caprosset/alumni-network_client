import React from 'react';
import { Link } from 'react-router-dom';

function JobCard(props) {
  return (
    <div>
      {
        props.allJobs.map( oneJob => {
          return (
            <div>
              <div>
                <h3>{oneJob.title}</h3>
                <p>{oneJob.company}</p>
                <p>{oneJob.city}</p>
              </div>
              <div>
                <p>{oneJob.bootcamp}</p>
              </div>
              <div>
                <Link to={`/job/${oneJob._id}`}>
                  <button>See job</button>
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default JobCard;
