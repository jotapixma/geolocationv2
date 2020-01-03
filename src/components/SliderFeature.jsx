import React from 'react';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import '../assets/styles/components/SliderFeature.scss';
import SmallProductCard from '../components/SmallProductCard.jsx';

// const Slide = require('./Slide').default;
const { red, blue, green } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

class SliderFeature extends React.Component {
  

  
  render () {
    return (
      <div style={{ position: 'relative', width: '100%', height: 500 }}>

        <Button onClick={() => this.state({ open: true })}>Open carousel</Button>
        <AutoRotatingCarousel
          open={this.state.open}
          onClose={() => this.state ({ open: false })}
          onStart={() => this.state ({ open: false })}
          mobile
          autoplay={true}
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