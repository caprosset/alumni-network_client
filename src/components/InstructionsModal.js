import React, { Component } from 'react'


class InstructionsModal extends Component {
  closeInstructions = () =>{
    const instructionsModal = document.getElementById('instructions-modal');
    instructionsModal.style.display = "none";
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      alert('You clicked outside of me!');
    }
  }

  render() {
    return (
      <div className="modal" id="instructions-modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Welcome to <br />Ironhack Alumni Network</p>
            <button className="delete" aria-label="close" onClick={this.closeInstructions}></button>
          </header>
          <section className="modal-card-body">
            <p>Glad to see you around! Here are some instructions to help make your visit a smooth experience.</p>
            &nbsp;
            <p>This app is a prototype of the Alumni Network I am building for Ironhack ex-students. It allows you to search and find:</p>
            <ul>
              <li>a contact in the alumni directory</li>
              <li>job opportunities</li>
              <li>workshops and networking events</li>
            </ul>
            &nbsp;
            <p>If you don't want to signup, here are some credentials you can login with: <br />
            Test user: test / 123<br />
            Test admin: admin / 123 <br />
            </p>
            &nbsp;
            <p>For a better experience, please switch to mobile view in your browser.</p>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={this.closeInstructions}>Understood, thanks</button>
          </footer>
        </div>
      </div>
    )
  }
  
}

export default InstructionsModal