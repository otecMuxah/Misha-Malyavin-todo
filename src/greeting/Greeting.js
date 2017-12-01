import React from 'react';

import './greeting.scss';

export const Greeting = (props) => {
  let result = '';
  const hours = new Date().getHours();

  if (hours > 22 || hours <= 3) {
    result = 'Good Night';
  }
  if (hours > 3 && hours <= 12) {
    result = 'Good Morning';
  }
  if (hours > 12 && hours <= 18) {
    result = 'Good Day';
  }
  if (hours > 18 && hours <= 22) {
    result = 'Good Evening';
  }
  if (props.name.length) {
    result += `, ${props.name}!` || 'Username';
  }

  return <div className="greeting-block">{result}</div>;
};
