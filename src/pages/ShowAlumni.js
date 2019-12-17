import React, { Component } from 'react';
import authService from '../lib/auth-service';
import userService from '../lib/user-service';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';



class ShowAlumni extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {},
      currentUser: false
    };		
  }

  findUser = () => {
    const id = this.props.match.params.id;
    userService.getOne(id)
      .then((user)=>{
        this.setState({ user })
      })
      .catch((err) => console.log(err));
    
    authService.me()
    .then((currentUser)=>{
      // if user is the logged in/current user
      if(id === currentUser._id) {
        console.log('is user');
        
        this.setState({ currentUser: true })
      }
    })
    .catch((err) => console.log(err));
  }

  componentDidMount() {
    console.log('enter');
    this.findUser();

  }

  componentDidUpdate(prevProps) {
    console.log('PREV PROPS', prevProps.match.params.id)
    console.log('PROPS', this.props.match.params.id)

    if(prevProps.match.params.id !== this.props.match.params.id) {
      this.findUser();
    }
  }

  render() {
    console.log('USER ID', this.props.match.params.id);

    const { firstName, lastName, email, phone, image, bootcamp, campus, cohort, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, _id } = this.state.user;

    const {logout} = this.props;

    console.log('IMAGE', image)
    // console.log('LOGOUT', logout);

    return (
      <div>
        <TopNav />
        <h2>{firstName} {lastName}</h2>
        <img src={image} alt="Profile picture" width="250" height="200"/>
        <div>
          <a href={linkedinUrl} target="_blank">Linkedin</a>
          <a href={githubUrl} target="_blank">Github</a>
          <a href={mediumUrl} target="_blank">Medium</a>
        </div>
        <div>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Bootcamp: {bootcamp}</p>
          <p>Campus: {campus}</p>
          <p>Cohort: {cohort}</p>
          <p>Current city: {currentCity}</p>
          <p>Current role: {currentRole}</p>
          <p>Current company: {currentCompany}</p>
        </div>
        {
          // if user is on his profile, display 'Edit' button
          this.state.currentUser
          ? 
            <div>
              <Link to={`/alumni/edit/${_id}`}>
                <button>Edit profile</button>
              </Link>
              <button onClick={logout}>Logout</button>
            </div>
          : null
        }
        <BottomNav />
      </div>
    )
  }
}

export default withAuth(ShowAlumni);