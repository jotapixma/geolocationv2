import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ProductCardDetail from './Views/ProductCardDetail.js';


function PurchaseProduct() {
  return (
    <div className="PurchaseProduct">
      <ProductCardDetail/>
    </div>
  );
}

export default PurchaseProduct;
