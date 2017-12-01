import React from 'react';
import './app.scss';

import { Header } from './header';
import { Footer } from './footer';
import { Main } from './main';
import { Error } from './error';

export const App = (
  <div>
    <Header />
    <Error text="Some text !!!" type="warn" color="red" />
    <Main />
    <Footer />
  </div>
);
