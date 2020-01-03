import React from 'react';
import '../assets/styles/components/OrderFilterSection.scss';
import GoBackArrow from '../assets/img/return-arrow.svg';

class OrderFilterSection extends React.Component {

  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this); // i think you are missing this
  }

  goBack(){
    this.props.history.goBack();
  }  

  render(){
    return (
      <section className="order-filter-bar">
        <div className="head-filter">
          <figure>
            <img src= {GoBackArrow} alt="go back arrow" />
          </figure>
          <span className="filter-title" onClick={this.goBack}>Ordenar por</span>
        </div>
        <ul className="list-group">
          <li className="active"> Menor precio</li>
          <li>Mayor precio</li>
          <li>Lo más nuevo</li>
          <li>Distancia</li>
        </ul>
      </section>

    );
  }
}

export default OrderFilterSection;

// const OrderFilterSection = () => (
// );
