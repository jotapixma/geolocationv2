import React from 'react';
import '../assets/styles/views/Home.scss';
// import ProductCard from '../components/ProductCard.jsx'
import ProductCardDetail from '../components/ProductCardDetail.jsx'
import CategorySection from '../components/CategorySection.jsx'
import PurchaseBar from '../components/PurchaseBar.jsx'
import ProductFeature from '../components/ProductFeature.jsx'
import SliderFeature from '../components/SliderFeature'
import GeneralFilterBar from '../components/GeneralFilterBar.jsx'
import GroupFilterSection from '../components/GroupFilterSection.jsx'
import ApplyButton from '../components/ApplyButton.jsx'

// import OrderFilterSection from '../components/OrderFilterSection.jsx'

function Home() {
  return (
    <div className="home">
      {/* <CategorySection/> */}
      {/* <ProductCard/> */}
      {/* <SliderFeature/> */}
      {/* <SmallProductCard/> */}
      {/* <OrderFilterSection/> */}
      {/* <GroupFilterSection/> */}
      {/* <ApplyButton/> */}
      {/* <GeneralFilterBar/> */}
      <ProductCardDetail/>
      <ProductFeature/>
      <PurchaseBar/>
    </div>
  );
}

export default Home;
