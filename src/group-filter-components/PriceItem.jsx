import React from 'react';
import '../assets/styles/components/GroupFilterSection.scss';

const PriceItem= () => (
  <div className="box-panel">
    <div className="box-item price">
      <span>Hasta $5000</span>
    </div>
    <div className="box-item price">
      <span>$5000 a $20000</span>
    </div>
    <div className="box-item price">
      <span>$20000 a $40000</span>
    </div>
    <div className="box-item price">
      <span>Más $40000</span>
    </div>
  </div>
);

export default PriceItem;