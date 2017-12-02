import React from 'react';

import { User } from '../User/User';
import './userlist.scss';

export const UserList = (props) => {
  let posts = '';
  let result = '';
  if (props.list) {
    result = props.list.map(item => (
      <li
        key={item.name}
        onClick={() => props.onClick(item)}
      >
        <User name={item.name} surname={item.surname} age={item.age} />
      </li>
    ));
  }
  if (props.posts) {
    posts = props.posts.map(item => (
      <li
        key={item.id}
      >
        {item.body}
      </li>
    ));
  }
  return <div className="users-posts"><ul>{result}</ul><ul>{posts}</ul></div>;
};
