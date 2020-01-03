import React from 'react';
import './App.css';
import Home from './Views/Home.js';
import PurchaseProduct from './Views/PurchaseProduct.js';
import './assets/styles/views/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import OrderFilterSection from './Views/OrderFilterSection.js';
import ExtendedFilterSection from './Views/ExtendedFilterSection.js';
import Geolocation from './Views/Geolocation.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/purchase/product" component={PurchaseProduct}/>
          <Route exact path="/filter/order" component={OrderFilterSection}/>
          <Route exact path="/filter/extended-filter" component={ExtendedFilterSection}/>
          <Route exact path="/geolocation" component={Geolocation}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
