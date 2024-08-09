import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./RegisterForm.css";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('personal');
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Contoh logika pendaftaran sederhana
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!ageConfirmed) {
      setError('You must confirm you are above 18 years old');
      return;
    }

    // Simpan data pendaftaran atau lakukan pendaftaran
    console.log('Registration successful');
    navigate('/welcome'); // Ganti dengan rute yang sesuai
  };

  return (
    <div className="login-container">
      <div className="Wrapper">
        <div style={{ marginTop: "110px" }} className="login-logo">
          <img style={{ marginTop: "90px" }} src="Images/1Asset 6.png" alt="Logo Register" />
        </div>
        <form style={{ textAlign: "center", width: "500px" }} className="login-form" onSubmit={handleRegister}>
          <img style={{ width: "150px", height: "auto" }} src="Images/BVNK (1).png" alt="Logo Register" />
          <h3 style={{ marginTop: "5px" }}>Create Your Account</h3>
          {error && <div className="error">{error}</div>}
          <div className="form-group">
            <label style={{ marginLeft: "5px", display: "block", textAlign: "left" }} htmlFor="firstName">Username</label>
            <div className="name-inputs">
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="First Name"
              />
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label style={{ marginLeft: "5px", display: "block", textAlign: "left" }} htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ marginLeft: "5px", display: "block", textAlign: "left" }} htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ marginLeft: "5px", display: "block", textAlign: "left" }} htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-options">
            <div className={`login-option ${accountType === 'personal' ? 'selected' : ''}`}>
              <input
                type="radio"
                id="personal"
                name="accountType"
                value="personal"
                checked={accountType === 'personal'}
                onChange={() => setAccountType('personal')}
              />
               <span>Personal Account</span>
            </div>
            <div className={`login-option ${accountType === 'business' ? 'selected' : ''}`}>
              <input
                type="radio"
                id="business"
                name="accountType"
                value="business"
                checked={accountType === 'business'}
                onChange={() => setAccountType('business')}
              />
               <span>Business Account</span>
            </div>
          </div>
          <div className="form-group checkbox-remember">
            <input
              type="checkbox"
              id="ageConfirmed"
              checked={ageConfirmed}
              onChange={(e) => setAgeConfirmed(e.target.checked)}
            />
            <label htmlFor="ageConfirmed">I confirm that I am 18 years of age or older, and I agree to
            the General Terms of Use and Privacy Policy</label>
          </div>
          <button type="submit">Open Personal Account</button>
          <div className="login-link">
            Already have an account? <a href="/login">Login Here</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
