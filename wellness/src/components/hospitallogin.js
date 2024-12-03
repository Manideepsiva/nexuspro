import React, { useState } from 'react';
import { Form, useLocation } from 'react-router-dom';
import Showerror from './showerror';

function Hospitallogin() {
  const [credentials, setCredentials] = useState({
    loginId: '',
    password: ''
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const message = queryParams.get('message') || '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCydjMrC682-bne_-yyrYkTCdxl0sEISxHxQ&s")', // Add your image URL here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'flex-start', // Align the container to the left
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for form container
          padding: '40px',
          width: '400px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          position: 'absolute',
          top: '50%',
          left: '50%', // Position it on the left side
          transform: 'translateY(-50%)',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#333' }}>Admin Portal</h2>
        <Form method="post" action="/hospitallogin">
          <div>
            <label htmlFor="loginId" style={{ display: 'block', marginBottom: '8px' }}>
              Login ID
            </label>
            <input
              type="text"
              id="loginId"
              name="loginId"
              value={credentials.loginId}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ddd',
              }}
            />
          </div>

          <div>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '8px' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ddd',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '18px',
            }}
          >
            Login
          </button>
          <Showerror message={message} />
        </Form>
      </div>
    </div>
  );
}

export default Hospitallogin;
