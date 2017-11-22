import React from 'react';

export const Error = (props) => {
    console.log(props);
    return (<mark style={ {color: props.color} }>{props.text}</mark>);
};