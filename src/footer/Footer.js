import React from 'react';
import './footer.scss';
import { Navigation } from "../navigation/Navigation";

const navItems = ['Home','Gallery','About','Home'];

export const Footer = () => {
    return (<footer className="footer">
        <Navigation nav={ navItems }/>
        <p>footer</p>
    </footer>)
};
