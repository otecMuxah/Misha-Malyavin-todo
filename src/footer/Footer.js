import React from 'react';
import './footer.scss';
import { Navigation } from '../navigation/Navigation';

export const Footer = () =>
  (
    <footer className="footer">
      <Navigation isLogin />
      <p>footer</p>
    </footer>
  );
