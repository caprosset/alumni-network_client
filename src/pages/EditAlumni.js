// import React, { Component } from 'react';
// import userService from '../lib/user-service';


// class EditAlumni extends Component {
//   state= {
//     firstName: '', 
//     lastName: '',
//     phone: '',
//     profilePicture: '',
//     currentCity: '',
//     currentRole: '',
//     linkedinUrl: '',
//     githubUrl: '',
//     mediumUrl: '',
//     isAdmin: ''
//   }

//   handleFormSubmit = event => {
//     event.preventDefault();
//     const { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin } = this.state;
    
//     const id = this.props.match.params.id;
//     const userUpdated = { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin }; 
//     userService.updateOne(id, userUpdated);
//   };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Edit profile</h1>
//         <form onSubmit={this.handleFormSubmit}>
//           <label>First name:</label>
//           <input
//             type="text"
//             name="firstName"
//             value={firstName}
//             onChange={this.handleChange}
//           />

//           <label>Last name:</label>
//           <input
//             type="text"
//             name="lastName"
//             value={lastName}
//             onChange={this.handleChange}
//           />

//           <label>Phone:</label>
//           <input disabled
//             type="text"
//             name="phone"
//             value={phone}
//             onChange={this.handleChange}
//           />

//           <label>Profile picture:</label>
//           <input disabled
//             type="text"
//             name="profilePicture"
//             value={profilePicture}
//             onChange={this.handleChange}
//           />

//           <label>Current city:</label>
//           <input disabled
//             type="text"
//             name="currentCity"
//             value={currentCity}
//             onChange={this.handleChange}
//           />

//           <label>Current role:</label>
//           <input disabled
//             type="text"
//             name="currentRole"
//             value={currentRole}
//             onChange={this.handleChange}
//           />

//           {/* <label>Current company:</label>
//           <input disabled
//             type="text"
//             name="currentCompany"
//             value={currentRole}
//             onChange={this.handleChange}
//           /> */}

//           <label>LinkedIn Url:</label>
//           <input disabled
//             type="text"
//             name="linkedinUrl"
//             value={linkedinUrl}
//             onChange={this.handleChange}
//           />
          
//           <label>Github Url:</label>
//           <input disabled
//             type="text"
//             name="githubUrl"
//             value={githubUrl}
//             onChange={this.handleChange}
//           />

//           <label>Medium Url:</label>
//           <input disabled
//             type="text"
//             name="mediumUrl"
//             value={mediumUrl}
//             onChange={this.handleChange}
//           />

//           <input type="submit" value="Save changes" />
//         </form>
//       </div>
//     )
//   }
// }


// export default EditAlumni;