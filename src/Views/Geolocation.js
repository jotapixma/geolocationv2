import React from 'react';
import '../assets/styles/views/Geolocation.scss';
import CuponaticLocation from '../assets/img/cuponatic-location.png';
import SmallProductCard from '../components/SmallProductCard'
import GoBackArrow from '../assets/img/return-arrow.svg';

class Geolocation extends React.Component {

  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack(){
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="geolocation">
        <figure className="location-img">
          <img src= {CuponaticLocation} alt="Cuponatic Address" />
        </figure> 
        <div className="go-back" onClick={this.goBack}>
          <img src= {GoBackArrow} alt="go back arrow"/>
        </div> 
        <SmallProductCard/>
      </div>
    );
  }

}

export default Geolocation;
