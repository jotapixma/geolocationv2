import React from 'react';
import '../assets/styles/components/GroupFilterSection.scss';
import GoBackArrow from '../assets/img/return-arrow.svg';
import CategoryItem from '../group-filter-components/CategoryItem.jsx'
import CommuneItem from '../group-filter-components/CommuneItem.jsx'
import DistanceItem from '../group-filter-components/DistanceItem.jsx'
import PriceItem from '../group-filter-components/PriceItem.jsx'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function SimpleExpansionPanel() {

  return (
    <section className="group-filter-section">
      <div className="head-filter">
        <figure>
          <img src= {GoBackArrow} alt="go back arrow" />
        </figure>
        <span className="filter-title">Filtrar por</span>
        <div className="clear-filters">
          <span>Borrar</span>
        </div>
      </div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="group-title">Categoría</h2>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <CategoryItem/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="group-title">Comunas </h2>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <CommuneItem/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="group-title">Distancia</h2>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <DistanceItem/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h2 className="group-title">Precio</h2>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <PriceItem/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
    </section>
  );
}
