import React from 'react';
import { withRouter } from 'react-router';
import '../assets/styles/components/GeneralFilterBar.scss';
import '../assets/styles/views/App.scss';

class GeneralFilterBar extends React.Component {

  goToOrderFilter(){
    this.props.history.push('/filter/order');
  }
  goToExtendedFilter(){
    this.props.history.push('/filter/extended-filter');
  }
  goToGeolocation(){
    this.props.history.push('/geolocation');
  }
  
  render(){
    return (
      <section className="filter-bar">
        <ul className="filter-content">
          <li className="filter-item active" onClick={this.goToOrderFilter.bind(this)}>Orden
            <span>1</span>
          </li>
          <li className="filter-item active" onClick={this.goToExtendedFilter.bind(this)}>Filtros
            <span>8</span>
          </li>
          <li className="filter-item" onClick={this.goToGeolocation.bind(this)}>Mapa</li>
        </ul>
      </section>
    );
  }
}

const GeneralFilterBarWithRouter = withRouter(GeneralFilterBar)
export default GeneralFilterBarWithRouter;