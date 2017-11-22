import React from 'react';
import './navigation.scss';

export const Navigation = () => {
    const text = 'Home';
    const items = ['Home','Gallery','About','Home']
    return (
        <nav className="main-nav">
            <ul>
                {items.map((item,index)=><li key={index}><a href={`/${item.toLowerCase()}`}>{item}</a></li>)}
            </ul>
        </nav>)
};
