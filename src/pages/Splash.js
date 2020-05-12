import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import ironhack from '../img/ironhack.png';


class Splash extends Component {
  render() {
    return ( 
    <div className="container">
      <section className="section anon-pages">
      
        <div className="column is-flex is-horizontal-center">
          <figure className="image is-128x128">
            <img src={ironhack} alt="Ironhack logo" />
          </figure>
        </div>

        <div className="block has-text-centered">
          <h1 className="title is-1 has-text-white">Alumni<br /> Network</h1>
          <h4 className="subtitle is-4 has-text-white" style={{'marginTop': '2%'}}>Keep in touch !</h4>
        </div>

        <div className="column is-one-third-desktop is-offset-one-third-desktop is-one-third-tablet is-offset-one-third-tablet is-two-thirds-mobile is-offset-2-mobile" >
          <div>
            <Link to={'/signup'}>
              <button className="button is-large is-info is-rounded is-fullwidth">Signup</button>
            </Link>
          </div>
          <div style={{'marginTop': '10%'}}>
            <Link to={'/login'}>
              <button className="button is-large is-info is-rounded is-fullwidth">Login</button>
            </Link>
          </div>
        </div>
  
      </section>
    </div>
    )
  }
}

export default Splash;