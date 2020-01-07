import React from 'react';
// import Slider from "react-slick";
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import '../assets/styles/components/SliderFeature.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmallProductCard from '../components/SmallProductCard.jsx';

// const Slide = require('./Slide').default;
// const { red, blue, green } = require('@material-ui/core/colors');
// const Button = require('@material-ui/core/Button').default;

class SliderFeature extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { open: false };
  }
  
  render () {
    return (
      <div style={{ position: 'relative', width: '100%', height: 500 }}>
        <AutoRotatingCarousel
          open={this.state}
          onClose={() => this.state({ open: false })}
          onStart={() => this.state({ open: false })}
          mobile
          autoplay={false}
          // landscape={true}
          style={{ position: 'absolute' }}
        >
          <SmallProductCard/>
          <SmallProductCard/>
          <SmallProductCard/>

        </AutoRotatingCarousel>
      </div>
    )
  }
}

export default SliderFeature;

// class SliderFeature extends React.Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <Slider {...settings}>
//         <SmallProductCard/>
//         <SmallProductCard/>
//         <SmallProductCard/>
//       </Slider>
//     );
//   }
// }
