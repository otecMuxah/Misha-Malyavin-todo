import React from 'react';

import { User } from '../User/User';

export const UserList = (props) => {
  const result = props.list.map(item => (
    <li key={item.id}>
      <User name={item.name} surname={item.surname} age={item.age} />
    </li>
  ));

  return (
    <ul>
      {result}
    </ul>
  );
};
