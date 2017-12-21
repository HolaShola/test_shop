import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './AuthPage.css';

const AuthPage = () => (
  <div className="auth">
    <div className="auth_email">
      <input placeholder="Email" />
    </div>
    <div className="auth_pass">
      <input placeholder="Password" />
    </div>
    <Button text={rrr} />
    <Link to="/account"><p>Create Account</p></Link>
  </div>
);

export default AuthPage;
