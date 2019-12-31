import React from 'react';
import '../assets/styles/components/SliderFeature.scss';
import SmallProductCard from '../components/SmallProductCard'
import CuponaticLocation from '../assets/img/cuponatic-location.png'


const SliderFeature = () => (
 <section className="carousel-container">
   <SmallProductCard/>
   {/* <figure>
     <img src={ CuponaticLocation } alt=""/>
   </figure> */}
 </section>
);

export default SliderFeature;