import React, { useState } from 'react';
import axios from 'axios';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const loginUser = async () => {

    try {

      const res = await axios.post('http://localhost:5000/login', {
        email,
        password,
        role
      });

      alert(res.data.message);

    } catch (error) {

      if (error.response) {

        alert(error.response.data.message);

      } else {

        alert('Server Error');

      }

    }

  };

  return (

      <div className="container mt-5 card">

      <div className="card p-4 shadow">

        <h2 className="text-center mb-4">
          Login
        </h2>

        

        <select
          className="form-control mb-3"
          onChange={(e) => setRole(e.target.value)}
        >

          <option value="user">User Login</option>
          <option value="admin">Admin Login</option>

        </select>

        

        <input
          type="email"
          placeholder="Enter Email"
          className="form-control mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        

        <button
          className="btn btn-primary w-100"
          onClick={loginUser}
        >
          Login
        </button>

        

        <p className="mt-3 text-center">
          <a href="/">Forgot Password?</a>
        </p>

        

        <p className="text-center">
          Not Registered?
          <a href="/register"> Register Here</a>
        </p>

      </div>

    </div>

  );

}

export default Login;