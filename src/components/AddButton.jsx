import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'white',
    border: '2px solid #FB7500',
    borderRadius: 30,
    color: '#FB7500',
    height: 48,
    width: 90,
    fontSize: 13,
    fontWeight: '900',
    margin: '0 5px'
  },
});

export default function AddButton() {
  const classes = useStyles();
  return <Button className={classes.root}>Agregar</Button>;
}