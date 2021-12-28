import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component'

const AccessoriesPage = () => (
  <div>
    <h1>Accessories Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component ={HomePage}></Route>
        <Route path='/accessories' component ={AccessoriesPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
