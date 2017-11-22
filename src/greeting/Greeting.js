import React from 'react';

import './greeting.scss';

export const Greeting = (props) => {
    let result = '';
    const hours = new Date().getHours();

    if (22 < hours || hours <= 3) {
        result = 'Good Night'
    }
    if (3 < hours && hours <= 12) {
        result = 'Good Morning'
    }
    if (12 < hours && hours <= 18) {
        result = 'Good Day'
    }
    if (18 < hours && hours <= 22) {
        result = 'Good Evening'
    }
    if (props.name.length) {
        result += `, ${props.name}!` || 'Username'
    }

    return (<div className={'greeting-block'}>{result}</div>)
};
