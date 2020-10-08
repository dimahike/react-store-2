import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Details from './components/Details';
import Footer from './components/Footer';

import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
