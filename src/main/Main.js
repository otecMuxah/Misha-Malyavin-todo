import React from 'react';

import { Content } from "../content/Content";
import { Aside } from "../aside/Aside";

import './main.scss';

export class Main extends React.Component {
    render() {
        return (<main className="main">
            <Content />
            <Aside />
        </main>)
    }
};
