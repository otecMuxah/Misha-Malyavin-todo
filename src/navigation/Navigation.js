import React from 'react';

import './navigation.scss';

export const Navigation = (props) => {
    const text = 'Home';

    return (
        <nav className="main-nav">
            <ul>
                {props.nav.map((item,index)=><li key={index}><a href={`/${item.toLowerCase()}`}>{item}</a></li>)}
            </ul>
        </nav>)
};
