import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({friend}) => {
    const {name, email, username, id} = friend;
    return (
        <div className='friend'>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p><small>User Name: <Link to={`/friend/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Friend;