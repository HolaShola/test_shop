import React from 'react';
import './AccountPage.css';

const AccountPage = () => (
  <div className="account">
    <div className="account_firstname">
      <input placeholder="First Name" />
    </div>
    <div className="account_secondname">
      <input placeholder="Second Name" />
    </div>
    <div className="account_email">
      <input placeholder="Email" />
    </div>
    <div className="account_pass">
      <input placeholder="Password" />
    </div>
    <button className="account_in">
        Create account
    </button>
  </div>
);

export default AccountPage;
