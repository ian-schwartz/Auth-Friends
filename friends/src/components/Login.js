import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
    
    const [ credentials, setCredentials ] = useState({ username: '', password: '' });

    const handleChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const login = e => {
        e.preventDefault();
        axios
          .post('http://localhost:5000/api/login', credentials)
          .then(res => {
              localStorage.setItem('token', res.data.payload);
              props.history.push('/friends');
          })
          .catch(err => console.log(err.response));
      };

        return (
            <div>
                <form onSubmit={login}>
                    <input
                      type='text'
                      name='username'
                      value={credentials.username}
                      onChange={handleChange}
                      / >
                    <input
                      type='password'
                      name='password'
                      value={credentials.password}
                      onChange={handleChange}
                      / >
                    <button type='submit'>Log In</button>
                </form>
            </div>
        );
};

export default Login;