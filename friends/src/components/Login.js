import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
    const [credentials, setCredentials] = useState({username: '', password: ''})

    const handleChange = e => {
        setCredentials({
              ...credentials,
              [e.target.name]: e.target.value
            })
    };

    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/myfriends');
        })
        .catch(err => console.log(err.response));
    }

        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input
                      type="text"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                      / >
                    <input
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      / >
                    <button>Log In</button>
                </form>
            </div>
        );
};

export default Login;