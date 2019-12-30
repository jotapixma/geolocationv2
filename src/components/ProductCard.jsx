import React from 'react';
import '../assets/styles/components/ProductCard.scss';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarIcon from '@material-ui/icons/Star';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

const ProductCard = () => (
  <article className="custom-card">
    <div className="card-content">
      <div className="card-header">
        <figure>
          <img src="" alt=""/>
        </figure>
      </div>
      <div className="card-body">
        <div className="card-title">
          <h4 className="title">¡2x1! 10 S. Levantamiento de Glúteos y Reafirmante Abdomen</h4>
        </div> 
        <div className="product-price">
          <div className="price-discount">
            <span>43%</span>
          </div>
          <div className="price-container">
            <h4 className="price-offer">%5.990</h4>
            <p className="old-price">%5.990</p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <ul className="review-product">
          <LocationOnIcon fontSize="small"/>
          <li>1.8 km</li>
          <div className="separator"></div>
          <StarIcon fontSize="small"/>
          <li>4.3(81)</li>
          <div className="separator"></div>
          <TurnedInNotIcon fontSize="small"/>
          <li>26.354</li>
        </ul>
        {/* <h5 className="adress-product">1.8 km</h5>
        <div className="review-product">
          <span>4.3</span>
          <span>(81)</span>
        </div> */}
      </div>
    </div>
  </article>
);

export default ProductCard;