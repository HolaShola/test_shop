import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import Search from './Search';
import BasketPage from './BasketPage/BasketPage';
import ProductDescriptionPage from './ProductDescriptionPage';
import AuthPage from './AuthPage';
import AccountPage from './AccountPage';

const App = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/search" component={Search} />
    <Route path="/basket" component={BasketPage} />
    <Route path="/product-description" component={ProductDescriptionPage} />
    <Route path="/auth" component={AuthPage} />
    <Route path="/account" component={AccountPage} />
  </div>
);

export default App;
