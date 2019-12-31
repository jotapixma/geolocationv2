import React from 'react';
import '../assets/styles/views/Home.scss';
// import ProductCard from '../components/ProductCard.jsx'
import ProductCardDetail from '../components/ProductCardDetail.jsx'
import CategorySection from '../components/CategorySection.jsx'
import PurchaseBar from '../components/PurchaseBar.jsx'
// import ProductFeature from '../components/ProductFeature.jsx'
import SliderFeature from '../components/SliderFeature'


function Home() {
  return (
    <div className="home">
      {/* <SliderFeature/> */}
      {/* <ProductFeature/> */}
      {/* <SmallProductCard/> */}
      <CategorySection/>
      <ProductCardDetail/>
      <ProductCardDetail/>
      <PurchaseBar/>
      {/* <ProductCard/> */}
      {/* <ProductCard/>  */}
    </div>
  );
}

export default Home;
