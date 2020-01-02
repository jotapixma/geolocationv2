import React from 'react';
import '../assets/styles/components/OrderFilterSection.scss';
import GoBackArrow from '../assets/img/return-arrow.svg';

const OrderFilterSection = () => (
  <section className="order-filter-bar">
    <div className="head-filter">
      <figure>
        <img src= {GoBackArrow} alt="go back arrow" />
      </figure>
      <span className="filter-title">Ordenar por</span>
    </div>
    <ul className="list-group">
      <li className="active"> Menor precio</li>
      <li>Mayor precio</li>
      <li>Lo más nuevo</li>
      <li>Distancia</li>
    </ul>
  </section>
);

export default OrderFilterSection;