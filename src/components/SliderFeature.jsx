import React from 'react';
import '../assets/styles/components/SliderFeature.scss';
import SmallProductCard from '../components/SmallProductCard'
// import CuponaticLocation from '../assets/img/cuponatic-location.png'
// // import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
// const Slide = require('./Slide').default;
// const { red, blue, green } = require('@material-ui/core/colors');
// const Button = require('@material-ui/core/Button').default;


const SliderFeature = () => (
 <section className="carousel-container">
   <SmallProductCard/>
   <SmallProductCard/>
   <SmallProductCard/>
   <SmallProductCard/>
   <SmallProductCard/>

 </section>
);

export default SliderFeature;

// const SliderFeature = () => (

//   <div style={{ position: 'relative', width: '100%', height: 500 }}>
//     <Button onClick={() => setState({ open: true })}>Open carousel</Button>
//     <AutoRotatingCarousel
//       label='Get started'
//       open={state.open}
//       onClose={() => setState({ open: false })}
//       onStart={() => setState({ open: false })}
//       mobile
//       autoplay={false}
//       style={{ position: 'absolute' }}
//     >
//       <Slide
//         media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
//         mediaBackgroundStyle={{ backgroundColor: red[400] }}
//         style={{ backgroundColor: red[600] }}
//         title='1 This is a very cool feature'
//         subtitle='Just using this will blow your mind.'
//       />
//       <Slide
//         media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
//         mediaBackgroundStyle={{ backgroundColor: blue[400] }}
//         style={{ backgroundColor: blue[600] }}
//         title='2 Ever wanted to be popular?'
//         subtitle='Well just mix two colors and your are good to go!'
//       />
//       <Slide
//         media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
//         mediaBackgroundStyle={{ backgroundColor: green[400] }}
//         style={{ backgroundColor: green[600] }}
//         title='3 May the force be with you'
//         subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
//       />
//       <Slide
//         media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
//         mediaBackgroundStyle={{ backgroundColor: green[400] }}
//         style={{ backgroundColor: green[600] }}
//         title='4 May the force be with you'
//         subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
//       />
//       <Slide
//         media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
//         mediaBackgroundStyle={{ backgroundColor: green[400] }}
//         style={{ backgroundColor: green[600] }}
//         title='5 May the force be with you'
//         subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
//       />
//       <Slide
//         media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
//         mediaBackgroundStyle={{ backgroundColor: green[400] }}
//         style={{ backgroundColor: green[600] }}
//         title='6 May the force be with you'
//         subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
//       />
//     </AutoRotatingCarousel>
//   </div>
// );

// export default SliderFeature;