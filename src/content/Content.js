import React from 'react';

import { Greeting } from "../greeting/Greeting";

import './content.scss';
import { UserList } from "../UserList/UserList";

export const Content = () => {

    const userList = [{name: 'Misha'},{name: 'Sasha',age: 29}];

    return (
        <div className={"content"}>
            <Greeting name={'Misha'} />
            <UserList list={ userList } />
        </div>
    )
};
