import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarIcon from '@material-ui/icons/Star';
import '../assets/styles/components/SmallProductCard.scss';
import ImgProduct from '../assets/img/img-small-card.png';

const SmallProductCard = () => (
  <article className="small-card">
    <div className="card-content">
      <div className="card-header">
        <figure>
          <img src={ImgProduct} alt=""/>
        </figure>
      </div>
      <div className="card-body">
        <h4 className="card-title">¡2x1! 10 S. Levantamiento de Glúteos y Reafirmante Abdomen</h4> 
        <div className="product-price">
          <div className="price-discount">
            <span>43%</span>
          </div>
          <div className="price-container">
            <h4 className="price-offer">%5.990</h4>
            <p className="old-price">%5.990</p>
          </div>
          <div className="card-footer">
            <ul className="review-product">
              <LocationOnIcon fontSize="small"/>
              <li>1.8 km</li>
              <div className="separator"></div>
              <StarIcon fontSize="small"/>
              <li>4.3(81)</li>
            </ul>
          </div>
        </div>
      </div>
  
    </div>
  </article>
);

export default SmallProductCard;