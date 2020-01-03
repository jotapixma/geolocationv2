import React from 'react';
import ProductCardDetail from '../components/ProductCardDetail.jsx';
import ProductFeature from '../components/ProductFeature.jsx'
import PurchaseBar from '../components/PurchaseBar.jsx';

function PurchaseProduct() {
  return (
    <div className="PurchaseProduct">
      <ProductCardDetail/>
      <ProductFeature/>
      <PurchaseBar/>
    </div>
  );
}

export default PurchaseProduct;
