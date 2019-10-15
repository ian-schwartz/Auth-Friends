import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';

const FriendsList = ({ friends, isLoading }) => {
    if (isLoading) {
        return <h3>Loading...</h3>
    }
    return (
        <div>
            {friends.map((friend, id) => <Friend key={id} {...friend} />)}
        </div>
    );
};

export default FriendsList;