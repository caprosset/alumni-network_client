import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ironhack from '../img/ironhack.png';
import InstructionsModal from '../components/InstructionsModal';


class Splash extends Component {
  openInstructions = () => {
    const instructionsModal = document.getElementById('instructions-modal');
    instructionsModal.style.display = "block";
  }

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
          <h4 className="subtitle is-4 has-text-white" id="keepintouch">Keep in touch !</h4>
        </div>

        <div className="block has-text-centered">
          <p className="has-text-white" id="instructions" onClick={this.openInstructions}>
          <span className="icon"><i className="fa fa-info-circle"></i></span>
          Instructions</p>
        </div>

        <InstructionsModal />

        <div className="column is-one-third-desktop is-offset-one-third-desktop is-one-third-tablet is-offset-one-third-tablet is-two-thirds-mobile is-offset-2-mobile" id="signup-login" >
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