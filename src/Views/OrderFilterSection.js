import React, { useState } from 'react';
import '../assets/styles/components/OrderFilterSection.scss';
import GoBackArrow from '../assets/img/return-arrow.svg';
import { useHistory } from "react-router-dom";


const OrderFilterSection = () => {
  const [ active, setActive] = useState(0);
  let history = useHistory();

  return (
    <section className="order-filter-bar">
      <div className="head-filter">
        <figure> 
          <img src= {GoBackArrow} alt="go back arrow" />
        </figure>
        <span className="filter-title" onClick={() => history.goBack()}>Ordenar por</span>
      </div>
      <ul className="list-group" id="list-group">
        <li className={active === 0 ? 'active': null} onClick={() => { setActive(0)}} > Menor precio </li>
        <li className={active === 1 ? 'active': null} onClick={() => { setActive(1)}}>Mayor precio</li>
        <li className={active === 2 ? 'active': null} onClick={() => { setActive(2)}}>Lo más nuevo</li> 
        <li className={active === 3 ? 'active': null} onClick={() => { setActive(3)}}>Distancia</li>
      </ul>
    </section>

  );
}

export default OrderFilterSection;

