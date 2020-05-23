import React from 'react';
import authService from './auth-service';
const { Consumer, Provider } = React.createContext();

// HOC to create Consumer
const withAuth = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {/* <Consumer> component provides callback which receives Providers "value" object */}
          {/* (value) => { <WrappedComponent />}  */}
          {({ login, signup, logout, user, isLoggedin, isLoading, errorMessage }) => {
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                logout={logout}
                user={user}
                isLoggedin={isLoggedin}
                isLoading={isLoading}
                errorMessage={errorMessage}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// Provider
class AuthProvider extends React.Component {
  state = { 
    isLoggedin: false, 
    user: null, 
    isLoading: true,
    errorMessage: null
  };

  componentDidMount() {
    // when App and AuthProvider load for the first time,
    // make a call to the server '/me' and check if user is authenticated
    authService
      .me()
      .then(user =>
        this.setState({ isLoggedin: true, user: user, isLoading: false }),
      )
      .catch( () =>
        this.setState({ isLoggedin: false, user: null, isLoading: false }),
      );
  }

  signup = user => {
    authService
      .signup(user) // { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin }
      .then(user => this.setState({ isLoggedin: true, isLoading: false, user, errorMessage: null }))
      .catch(err => {
        console.log(err);
        this.setState({errorMessage: "Signup failed"})
      });
  };

  login = user => {
    authService
      .login(user) // { email, password }
      .then(user => this.setState({ isLoggedin: true, isLoading: false, user, errorMessage: null }))
      .catch(err => {
        this.setState({errorMessage: "Login failed"})
      });
  };

  logout = () => {
    authService
      .logout()
      .then(() => this.setState({ isLoggedin: false, user: null, errorMessage: null }))
      .catch(err => {
        this.setState({errorMessage: "Logout failed"})
      });
  };

  render() {
    const { isLoading, isLoggedin, user, errorMessage } = this.state;
    const { login, logout, signup } = this;

    return (
      <Provider value={{ isLoading, isLoggedin, user, errorMessage, login, logout, signup }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { withAuth, AuthProvider };
