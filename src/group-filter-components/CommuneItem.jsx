import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(0,3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    antofagasta: true,
    chillan: false,
    concon: false,
    concepcion: false,
    curarrehue: false,
    quisco: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { antofagasta, chillan, concon, concepcion, curarrehue, quisco } = state;
  // const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
      
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={antofagasta} onChange={handleChange('antofagasta')} value="antofagasta" />}
            label="Antofagasta"
          />
          <FormControlLabel
            control={<Checkbox checked={chillan} onChange={handleChange('chillan')} value="chillan" />}
            label="Chillán"
          />
          <FormControlLabel
            control={
              <Checkbox checked={concon} onChange={handleChange('concon')} value="concon" />
            }
            label="Concón"
          />
          <FormControlLabel
            control={
              <Checkbox checked={concepcion} onChange={handleChange('concepcion')} value="concepcion" />
            }
            label="Concepción"
          />
          <FormControlLabel
            control={
              <Checkbox checked={curarrehue} onChange={handleChange('curarrehue')} value="curarrehue" />
            }
            label="Curarrehue"
          />
          <FormControlLabel
            control={
              <Checkbox checked={quisco} onChange={handleChange('quisco')} value="quisco" />
            }
            label="El Quisco"
          />
        </FormGroup>
      </FormControl>
  
    </div>
  );
}