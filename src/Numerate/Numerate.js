import React from 'react';

export const Numerate = (props) => {
    let array = [];
    let counter = props.from;

    if (props.from && props.to) {
        while (counter < props.to) {
            array.push(counter++);
        }
    }
    if (props.odd) {
        array = array.filter((item) => {
            if (item % 2 !== 0) {
                return item
            }
        })
    }
    if (props.even) {
        array = array.filter((item) => {
            if (item % 2 === 0) {
                return item
            }
        })
    }

    return (<ul>
        {array.map((item, index) => <li key={index}>{item}</li>)}
    </ul>)
};