import React from 'react';
import { withRouter } from 'react-router';
import '../assets/styles/components/GeneralFilterBar.scss';
import '../assets/styles/views/App.scss';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import FilterListIcon from '@material-ui/icons/FilterList';
import MapIcon from '@material-ui/icons/Map';

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
          <li className="filter-item active" onClick={this.goToOrderFilter.bind(this)}><ImportExportIcon fontSize="small"/>Orden
            <div className="alert-item">
              <span>1</span>
            </div>
          </li>
          <li className="filter-item active" onClick={this.goToExtendedFilter.bind(this)}><FilterListIcon fontSize="small"/>Filtros
            <div className="alert-item">
              <span>8</span>
            </div>
          </li>
          <li className="filter-item" onClick={this.goToGeolocation.bind(this)}><MapIcon fontSize="small"/>Mapa
            <div className="alert-item">
              <span>2</span>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

const GeneralFilterBarWithRouter = withRouter(GeneralFilterBar)
export default GeneralFilterBarWithRouter;