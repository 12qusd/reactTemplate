import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import css from '../css/main.css';

import Example from './components/example.jsx';
import Home from './components/home.jsx';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/example' component={Example}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <Routes/>,
  document.getElementById('app')
);
