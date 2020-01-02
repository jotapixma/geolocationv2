import React from 'react';
import '../assets/styles/components/ProductFeature.scss';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ProductFeature = () => (
  <section className="product-feature">
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h2 className="group-title">Resumen del descuento</h2>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed et officiis laborum incidunt provident amet dolores culpa officia fuga.</p>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h2 className="group-title">Valoración del comercio</h2>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed et officiis laborum incidunt provident amet dolores culpa officia fuga.</p>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h2 className="group-title">Reglas claras</h2>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed et officiis laborum incidunt provident amet dolores culpa officia fuga.</p>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h2 className="group-title">Vencimiento</h2>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed et officiis laborum incidunt provident amet dolores culpa officia fuga.</p>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h2 className="group-title">Descripción del comercio</h2>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed et officiis laborum incidunt provident amet dolores culpa officia fuga.</p>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h2 className="group-title">Otras ofertas de Pau Beauty Center</h2>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed et officiis laborum incidunt provident amet dolores culpa officia fuga.</p>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h2 className="group-title">Otros descuentos en levantamiento de glúteos</h2>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed et officiis laborum incidunt provident amet dolores culpa officia fuga.</p>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </section>
);

export default ProductFeature;