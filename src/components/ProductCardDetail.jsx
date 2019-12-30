import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { yellow } from '@material-ui/core/colors';
import '../assets/styles/components/ProductCardDetail.scss';

const ProductCardDetail = () => (
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
          <p>¡2x1! 10 Sesiones de Levantamiento de Glúteos y Reafirmante de Abdomen con Electroestimulación u Ondas Rusas en Providencia.</p>
        </div> 
        <div className="product-price">
          <div className="price-discount">
            <span>43%</span>
          </div>
          <div className="price-container">
            <h4 className="price-offer">%5.990</h4>
          </div>
          <div class="product-id">
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

export default ProductCardDetail;