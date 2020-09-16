import React from 'react'
import { Link } from 'react-router-dom';
import ironhack from '../img/ironhack.png';

function Error() {
  return (
    <div className="container">
      
      <div className="is-flex searchnav">
        <div className="navbar-brand is-active">
          <figure className="image is-96x96">
            <Link to='/alumni'><img src={ironhack} alt="Ironhack logo" /></Link>
          </figure>
        </div>
      </div>

      <section className="section">
        <div className="page-body"> 
          <h3 className="title is-3 has-text-centered is-uppercase">You just got 404'd</h3>
          <h5 className="has-text-centered">The page you are looking for <br />does not exist. Sorry :(</h5>
          <img 
            src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif"
            alt="404-error-gif"
            width="800px"
            height="auto"
          />
        </div>
      </section>

    </div>
  )
}

export default Error