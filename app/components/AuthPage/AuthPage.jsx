import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Button from '../Button';
import './AuthPage.css';

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: ''
    }
  }

  handleClickAuth = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'mode': 'no-cors'
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
      })
    })
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    })
  }
  
  handleChangeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <div className="auth">
        <form action="">
          <div className="auth_email">
            <input
              type="text"
              placeholder="Username"
              onChange={this.handleChangeUsername}  
            />
          </div>
          <div className="auth_pass">
            <input
              type="Email"
              placeholder="Email"
              onChange={this.handleChangeEmail}
            />
          </div>
          <div className="auth_in">
            <input
              type="submit"
              value="Sign in"
              onClick={this.handleClickAuth}
            />
          </div>
        </form>
        <div className="create_account">
          <Link to="/account"><p>Create Account</p></Link>
        </div>
      </div>
    );
  }  
};

export default AuthPage;
