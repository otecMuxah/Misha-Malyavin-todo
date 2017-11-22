import React from 'react';

import { StatusMessage } from '../StatusMsg/status-message'
import { Counter } from "../counter/Counter";

import './main.scss';

const getProps = (text)=> ({
    valid: true,
    text: text || 'Logon was successful !!!'
});

const Comps = {
    List(){return <ul><li>1</li><li>2</li></ul>},
    Message(props){return <mark>{props.text}</mark>}
};

export const Main = () => {
    return (<main className="main">
        <p>main</p>
        <StatusMessage />
        <StatusMessage {...getProps("Torolololo")} />

        <Comps.List />
        <Comps.Message text="test me" />

        <Counter />
    </main>)
};