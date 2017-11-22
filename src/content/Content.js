import React from 'react';

import { Greeting } from "../greeting/Greeting";

import './content.scss';

export const Content = () => {
    return (
        <div className={"content"}>
            <Greeting name={'Misha'}/>
        </div>
    )
};
