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
          {({ login, signup, logout, user, isLoggedin, isLoading }) => {
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                logout={logout}
                user={user}
                isLoggedin={isLoggedin}
                isLoading={isLoading}
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
  state = { isLoggedin: false, user: null, isLoading: true };

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
    const { firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin } = user;

    authService
      .signup({ firstName, lastName, email, password, bootcamp, campus, cohort, isAdmin })
      .then(user => this.setState({ isLoggedin: true, user }))
      .catch(err => console.log(err) );
  };

  login = user => {
    const { email, password } = user;

    authService
      .login({ email, password })
      .then(user => this.setState({ isLoggedin: true, user }))
      .catch(err => console.log(err) );
  };

  logout = () => {
    authService
      .logout()
      .then(() => this.setState({ isLoggedin: false, user: null }))
      .catch(err => console.log(err));
  };

  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const { login, logout, signup } = this;

    return (
      <Provider value={{ isLoading, isLoggedin, user, login, logout, signup }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { withAuth, AuthProvider };
