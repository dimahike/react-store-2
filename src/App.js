import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Details from './components/Details';

import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route exact path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </>
  );
}

export default App;
