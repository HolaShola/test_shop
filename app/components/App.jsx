import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import Search from './Search';
import BasketPage from './BasketPage/BasketPage';
import ProductDescriptionPage from './ProductDescriptionPage';
import AuthPage from './AuthPage';

const App = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/search" component={Search} />
    <Route path="/basket" component={BasketPage} />
    <Route path="/product-description" component={ProductDescriptionPage} />
    <Route path="/auth" component={AuthPage} />
  </div>
);

export default App;
