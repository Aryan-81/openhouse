"use client";

import { useState } from "react";
import '../login.css';

export default function Admin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Admin ID:', id, 'Password:', password);
  };

  return (
    <div className="container">
      <div className="logo-section">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/1/12/Indian_Institute_of_Technology%2C_Jammu_Logo.png"
          alt="Pragyaan Logo"
        />
        <h1>PRAGYAAN</h1>
      </div>
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="id">Admin ID</label>
            <input
              type="email"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
