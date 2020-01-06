import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { yellow } from '@material-ui/core/colors';
import '../assets/styles/components/ProductCardDetail.scss';
import { withRouter } from 'react-router';
import GoBackArrow from '../assets/img/return-arrow.svg';


class ProductCardDetail extends React.Component {

  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack(){
    this.props.history.goBack();
  }
  
  render(){
    return (
      <article className="custom-card-detail">
        <div className="card-content">
          <div className="card-header">
            <figure>
              <img src="" alt=""/>
            </figure>
            <div className="go-back-arrow" onClick={this.goBack}>
              <img src={GoBackArrow} alt="go back arrow" />
            </div>
          </div>
          <div className="card-body">
            <div className="card-title">
              <h4 className="title">¡2x1! 10 S. Levantamiento de Glúteos y Reafirmante Abdomen</h4>
              <p>¡2x1! 10 Sesiones de Levantamiento de Glúteos y Reafirmante de Abdomen con Electroestimulación u Ondas Rusas en Providencia.</p>
            </div> 
            <div className="product-price">
              <div className="price-discount">
                <span>43%</span>
              </div>
              <div className="price-container">
                <h4 className="price-offer">%5.990</h4>
              </div>
              <div className="product-id">
                <span>ID: 251902</span>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <span>1.8 km, Providencia</span>
            <span><StarIcon style={{ color: yellow[500] }}/>4.3(81 valoraciones)</span>
          </div>
        </div>
      </article>
    );
  }

} 

const ProductCardDetailWithRouter = withRouter(ProductCardDetail)
export default ProductCardDetailWithRouter;
