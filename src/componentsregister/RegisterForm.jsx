import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [accountType, setAccountType] = useState('personal');

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <img src="./Images/BVNK (1).png" alt="Logo" className="logo" />
        <div className="subtitle">Sign Up</div>
        <form>
          {/* Form Fields */}
          <div className="form-field form-field-flex">
            <div className="form-field-half">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first-name" />
            </div>
            <div className="form-field-half">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" />
            </div>
          </div>
          {/* Other Fields */}
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" />
          </div>
          {/* Account Type Options */}
          <div className="account-type">
          <label style={{fontWeight:"bold"}} htmlFor="confirm-password">Choose Account Type:</label>

            <div className="account-options">
              {['personal', 'business'].map(type => (
                <label key={type} className={`account-option ${accountType === type ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    value={type}
                    checked={accountType === type}
                    onChange={handleAccountTypeChange}
                    className="account-radio"
                  />
                  <div className={`option-icon ${type}-icon`}></div>
                  <div className="option-info">
                    <div className="option-title">{type === 'personal' ? 'Personal Account' : 'Business Account'}</div>
                    <div className="option-description">{type === 'personal' ? 'All your personal finances in one place.' : 'Adaptable to your company\'s needs.'}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
          {/* Terms and Conditions */}
          <div className="form-field">
            <label style={{fontWeight:"normal"}} className="checkbox-container">
              <input type="checkbox" id="confirm-age" />
              I confirm that I am 18 years of age or older, and I agree to the General Terms of Use and Privacy Policy
            </label>
          </div>
          {/* Submission Button */}
          <button type="submit" className={`btn ${accountType === 'personal' ? 'btn-personal' : 'btn-business'}`}>
            {accountType === 'personal' ? 'Open Personal Account' : 'Open Business Account'}
          </button>
          {/* Login Link */}
          <a href="/login" className="login-link">Already Have An Account? Login Here</a>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
