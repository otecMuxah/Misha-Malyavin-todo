import React from 'react';
import './app.scss';

import { Header } from './header';
import { Footer } from './footer';
import { Main } from './main';

export const App = (
  <div className="main-wrapper">
    <Header />
    <Main />
    <Footer />
  </div>
);
