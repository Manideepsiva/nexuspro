import React, { useState,useEffect } from 'react';
import { Form,useLocation } from 'react-router-dom';
import Showerror from './showerror';

function Register() {




const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const message = queryParams.get('message') || '';


  console.log("hey man its top",message,"and state is");

  const [credentials, setCredentials] = useState({
    loginId: '',
    password: '',
    username:'',
    age:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <div className="login-form">
      <h2>Login</h2>
      <Form method="post" action ="/register">
        <div>
          <label htmlFor="loginId">Login ID</label>
          <input
            type="text"
            id="loginId"
            name="loginId"
            value={credentials.loginId}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">age</label>
          <input
            type='number'
            id="age"
            name="age"
            value={credentials.age}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register</button>
       <Showerror  message = {message}/>
      </Form>
    </div>
  );
}

export default Register;
