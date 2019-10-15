import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = props => {

    const [ newFriend, setNewFriend ] = useState({ name: '', age: '', email: '' });

    const handleChange = e => {
        setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
    };

    const addFriend = () => {
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response));
    };

    return (
        <form onSubmit={addFriend}>
            <label> Name </label>
            <input
              type='text'
              name='name'
              value={newFriend.name}
              onChange={handleChange}
              />
            <label> Age </label>
            <input
              type='text'
              name='age'
              value={newFriend.age}
              onChange={handleChange}
              />
            <label> Email </label>
            <input
              type='text'
              name='email'
              value={newFriend.email}
              onChange={handleChange}
              />
              <button type='submit'>Add Friend</button>
        </form>
    );
};

export default AddFriend;

