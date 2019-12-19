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
        this.setState({ user });
      })
      .catch((err) => {
        // console.log(err);
      })
    
    authService.me()
    .then((currentUser)=>{
      // if user is the logged in/current user
      if(id === currentUser._id) {
        // console.log('is user');
        
        this.setState({ currentUser: true })
      }
    })
    .catch((err) => {
      // console.log(err);
    });
  }

  componentDidMount() {
    // console.log('enter');
    this.findUser();

  }

  componentDidUpdate(prevProps) {
    // console.log('PREV PROPS', prevProps.match.params.id)
    // console.log('PROPS', this.props.match.params.id)

    if(prevProps.match.params.id !== this.props.match.params.id) {
      this.findUser();
    }
  }

  render() {
    // console.log('USER ID', this.props.match.params.id);

    const { firstName, lastName, email, phone, image, bootcamp, campus, cohort, currentCity, currentRole, currentCompany, linkedinUrl, githubUrl, mediumUrl, _id } = this.state.user;

    const {logout} = this.props;

    // console.log('IMAGE', image)
    // console.log('LOGOUT', logout);

    return (
      <div className="container">
        <section className="section">

          <TopNav />

          <div className="page-body">
            <div className="is-flex is-horizontal-center ">
              <figure className="image is-128x128">
                <img className="is-rounded is-128x128" src={image} alt="Profile picture" />
              </figure>
            </div>
              
            <div className="has-text-centered alumni-header">
              <h3 className="title is-3">{firstName} {lastName}</h3>

              <div className="is-flex is-horizontal-center social-icons">
                <div>
                  <a href={`mailto:${email}`} target="_blank">
                    <span className="icon is-size-3 has-text-dark">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>

                <div>
                  <a href={linkedinUrl} target="_blank">
                    <span className="icon is-size-3 has-text-dark">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>

                { (this.state.user.bootcamp === 'Web Development')
                  ? <div>
                    <a href={githubUrl} target="_blank">
                      <span className="icon is-size-3 has-text-dark">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                  : null
                }
                
                { (this.state.user.bootcamp === 'UX Design')
                ? <div>
                    <div>
                      <a href={mediumUrl} target="_blank">
                        <span className="icon is-size-3 has-text-dark">
                          <i className="fa fa-medium" aria-hidden="true"></i>
                        </span>
                      </a>
                    </div>
                </div>
                : null
                }
            </div>

            <div className="block has-text-left alumni-info">
              <div className="block">
                <p className="has-text-weight-bold">Email:</p>
                <p>{email}</p>
              </div>

              <div className="block">
                <p className="has-text-weight-bold">Phone:</p>
                <p>{phone}</p>
              </div>

              <div className="block">
                <p className="has-text-weight-bold">Bootcamp:</p>
                <p>{bootcamp}</p>
              </div>

              <div className="block">
                <p className="has-text-weight-bold">Campus:</p>
                <p>{campus}</p>
              </div>

              <div className="block">
                <p className="has-text-weight-bold">Cohort:</p>
                <p>{cohort}</p>
              </div>

              <div className="block">
                <p className="has-text-weight-bold">Current city:</p>
                <p>{currentCity}</p>
              </div>

              <div className="block">
                <p className="has-text-weight-bold">Current role:</p>
                <p>{currentRole}</p>
              </div>

              <div className="block">
                <p className="has-text-weight-bold">Current company:</p>
                <p>{currentCompany}</p>
              </div>
            </div>
            
            {
              // if user is on his profile, display 'Edit' button
              this.state.currentUser
              ? 
                <div className="buttons bottom-buttons">
                  <Link to={`/alumni/edit/${_id}`}>
                    <button className="button is-info">Edit profile</button>
                  </Link>
                  <button className="button is-danger" onClick={logout}>Logout</button>
                </div>
              : null
            }
            </div>
          </div>

          <BottomNav />

        </section>
      </div>
    )
  }
}

export default withAuth(ShowAlumni);