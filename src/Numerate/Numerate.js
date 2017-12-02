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
    array = array.filter(item => item % 2 !== 0);
  }

  if (props.even) {
    array = array.filter(item => item % 2 === 0);
  }

  return (
    <ul>
      {array.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};

