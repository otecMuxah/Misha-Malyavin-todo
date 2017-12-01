import React from 'react';
import './user.scss'

export const User = (props) => {
    return (
        <div className='user-holder'>
            <div className="name">Name - {props.name || 'none'}</div>
            <div className="surname">Surname - {props.surname || 'none'}</div>
            <div className="age">Age - {props.age || 'none'}</div>
        </div>
    )
};
