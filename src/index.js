import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './pages/home/index';
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const NotFound = () => (<div><h1>Not Found</h1> <p>Error 404</p></div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
