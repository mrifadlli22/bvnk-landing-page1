import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Contoh logika sederhana tanpa fetch
    if (username === 'testuser' && password === 'password123') {
      console.log('Login successful');

      // Simpan username ke localStorage
      localStorage.setItem('username', username);

      navigate('/dashboard', { state: { username: username } });
    } else {
      setError('Wrong username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="Wrapper">
        <div style={{ marginTop: "10px" }} className="login-logo">
          <img style={{ marginTop: "90px" }} src="Images/1Asset 6.png" alt="Logo Login" />
        </div>
        <form style={{ textAlign: "center", width:"400px" }} className="login-form" onSubmit={handleLogin}>
          <img style={{ width: "150px", height: "auto" }} src="Images/BVNK (1).png" alt="Logo Login" />
          <h3 style={{ marginTop: "5px" }}>Login to your Account</h3>
          {error && <div className="error">{error}</div>}
          <div className="form-group">
            <label style={{ marginLeft: "5px", display: "block", textAlign: "left" }} htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="form-options">
          </div>
          <button type="submit">Login</button>
          <div className="login-options">
            <div className="login-option">
            <img className="login-icon" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d56df4102f27da8b4fd6a1d7e77ed852ab78e4ef0589736cb8526eaf3d7af5f6?apiKey=e3ddd6dd58b748b09fc1391939743920&&apiKey=e3ddd6dd58b748b09fc1391939743920" alt="Google Icon" />
            <span>Sign In With Google</span>
            </div>
            <div className="login-option">
              <img className="login-icon" src="https://cdn.builder.io/api/v1/image/assets/TEMP/59047db6266362c93dbdd8b8965541132d1551689d436780e3a5314ee589dc52?apiKey=e3ddd6dd58b748b09fc1391939743920&&apiKey=e3ddd6dd58b748b09fc1391939743920" alt="Apple Logo" />
              <span>Sign In With Apple</span>
            </div>
          </div>
          <div className="notregister">
            Not registered Yet? <a href="/register">Create an Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
