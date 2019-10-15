import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendsList from './FriendsList';

const Friends = props => {
    
    const [ friends, setFriends ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setFriends(res.data);
            setIsLoading(false);
        })
        .catch(err => console.log(err.response));
    }, []);

    return (
        <FriendsList friends={friends} isLoading={isLoading} />
    );
};

export default Friends;