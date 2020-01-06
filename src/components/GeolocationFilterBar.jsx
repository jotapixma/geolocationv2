import React from 'react';
import { withRouter } from 'react-router';
import '../assets/styles/components/GeolocationFilterBar.scss';
import FilterListIcon from '@material-ui/icons/FilterList';
import MapIcon from '@material-ui/icons/Map';

class GeolocationFilterBar extends React.Component {

  goToExtendedFilter(){
    this.props.history.push('/filter/extended-filter');
  }
  goToHome(){
    this.props.history.push('/');
  }
  
  render(){
    return (
      <section className="geolocation-filter-bar">
        <ul className="filter-content">
          <li className="filter-item active" onClick={this.goToExtendedFilter.bind(this)}><FilterListIcon fontSize="small"/>Filtros
            <div className="alert-item">
              <span>8</span>
            </div>
          </li>
          <li className="filter-item" onClick={this.goToHome.bind(this)}><MapIcon fontSize="small"/>Lista
          </li>
        </ul>
      </section>
    );
  }
}

const GeolocationFilterBarWithRouter = withRouter(GeolocationFilterBar)
export default GeolocationFilterBarWithRouter;