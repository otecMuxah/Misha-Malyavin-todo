import React from 'react'
import ReactDom from 'react-dom'

import { Navigation } from "./navigation/navigation";

const Component = (
    <div>
        <h1>Hello react !!!!</h1>
        <Navigation/>
    </div>
);

ReactDom.render(Component, document.getElementById('app'));






