import React from 'react';

import { Greeting } from "../greeting/Greeting";

import './content.scss';
import {User} from "../User/User";

export const Content = () => {
    return (
        <div className={"content"}>
            <Greeting name={'Misha'}/>
            <User name={'Misha'} surname={'Petrov'} age='28'/>
        </div>
    )
};
