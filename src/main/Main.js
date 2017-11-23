import React from 'react';

import { Content } from "../content/Content";
import { Aside } from "../aside/Aside";

import './main.scss';

export const Main = () => {
    return (<main className="main">
        <Content />
        <Aside />
    </main>)
};
