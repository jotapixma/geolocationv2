import React from 'react';
import '../assets/styles/views/Home.scss';
import ProductCard from '../components/ProductCard.jsx'
import CategorySection from '../components/CategorySection.jsx'


function Home() {
  return (
    <div className="home">
      <CategorySection/>
      <ProductCard/>
      <ProductCard/>
    </div>
  );
}

export default Home;
