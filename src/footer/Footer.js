import React from 'react';
import './footer.scss';
import { Navigation } from "../navigation/Navigation";

export const Footer = () => {
    return (<footer className="footer">
        <Navigation/>
        <p>footer</p>
    </footer>)
}