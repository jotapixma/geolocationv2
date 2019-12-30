import React from 'react';
import '../assets/styles/views/Home.scss';
// import ProductCard from '../components/ProductCard.jsx'
import ProductCardDetail from '../components/ProductCardDetail.jsx'
import CategorySection from '../components/CategorySection.jsx'
import PurchaseBar from '../components/PurchaseBar.jsx'
import ProductFeature from '../components/PurchaseBar.jsx'


function Home() {
  return (
    <div className="home">
      {/* <CategorySection/> */}
      <ProductCardDetail/>
      <ProductCardDetail/>
      <PurchaseBar/>
      <ProductFeature/>
      {/* <ProductCardDetail/> */}
      {/* <ProductCard/>
      <ProductCard/> */}
    </div>
  );
}

export default Home;
