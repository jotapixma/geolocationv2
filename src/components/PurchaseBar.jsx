import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import '../assets/styles/components/PurchaseBar.scss';
import AddButton from '../components/AddButton.jsx'
import BuyButton from '../components/BuyButton.jsx'

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
// }));

const PurchaseBar = () => (
  <section className="purchase-bar">
    <div className="purchase-container">
      <div className="price-content">
        <h4 className="price-offer">$23.990</h4>
        <p className="old-price">$350.000</p>
      </div>
      <div className="buttons-panel">
        <AddButton/>
        <BuyButton/>
      </div>
    </div>
  </section>
);

export default PurchaseBar;