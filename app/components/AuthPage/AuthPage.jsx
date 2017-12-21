import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '../Button';
import './AuthPage.css';

const AuthPage = () => (
  <div className="auth">
    <form action="">
      <div className="auth_email">
        <input type="email" placeholder="Email" />
      </div>
      <div className="auth_pass">
        <input type="password" placeholder="Password" />
      </div>
      <div className="auth_in">
        <input type="submit" value="Sign in" />
      </div>
    </form>
    <div className="create_account">
      <Link to="/account"><p>Create Account</p></Link>
    </div>
  </div>
);

export default AuthPage;
