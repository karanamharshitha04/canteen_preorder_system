import React, { useState } from 'react';
import axios from 'axios';

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {

    try {

      const res = await axios.post('http://localhost:5000/register', {
        name,
        email,
        password
      });

      alert(res.data.message);

    } catch (error) {

      alert('Registration Failed');

    }

  };

  return (

      <div className="container mt-5 card">

      <div className="card p-4 shadow">

        <h2 className="text-center mb-4">
          User Registration
        </h2>

        <input
          type="text"
          placeholder="Enter Name"
          className="form-control mb-3"
          onChange={(e) => setName(e.target.value)}
        />

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
  className="btn btn-success w-100"
  onClick={registerUser}
>
  Register
</button>

<p className="text-center mt-3">
  Already Registered?
  <a href="/login"> Login Here</a>
</p>

      </div>

    </div>

  );

}

export default Register;