import React, { Component } from 'react'
import userService from '../lib/user-service';

class ShowAlumni extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {}
    };		
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    userService.getOneById(id)
      .then((user)=>{
        this.setState({ user })
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>{this.state.user.firstName} {this.state.user.lastName}</h2>
        <div>
          <a href={this.state.user.linkedinUrl} target="_blank">Linkedin</a>
          <a href={this.state.user.githubUrl} target="_blank">Github</a>
          <a href={this.state.user.mediumUrl} target="_blank">Medium</a>
        </div>
        <div>
          <p>Email: {this.state.user.email}</p>
          <p>Phone: {this.state.user.phone}</p>
          <p>Bootcamp: {this.state.user.bootcamp}</p>
          <p>Campus: {this.state.user.campus}</p>
          <p>Cohort: {this.state.user.cohort}</p>
          <p>Current city:{this.state.user.currentCity}</p>
          <p>Current role:{this.state.user.currentRole}</p>
        </div>
      </div>
    )
  }
}


export default ShowAlumni;