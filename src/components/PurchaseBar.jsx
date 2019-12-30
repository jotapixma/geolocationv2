import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import '../assets/styles/components/PurchaseBar.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddButton from '../components/AddButton.jsx'
import BuyButton from '../components/BuyButton.jsx'

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
// }));

export default function CenteredGrid() {

  return (
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
}