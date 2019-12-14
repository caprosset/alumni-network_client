import React, { Component } from 'react'

class EditAlumni extends Component {
  state= {
    firstName: '', 
    lastName: '',
    email: '', 
    password: '' ,
    bootcamp: 'Web Development',
    campus: 'Barcelona', 
    cohort: 'oct-19',
    isAdmin: 'false' 
  }

  render() {
    return (
      <div>
        <h1>Edit profile</h1>
      </div>
    )
  }
}


export default EditAlumni;