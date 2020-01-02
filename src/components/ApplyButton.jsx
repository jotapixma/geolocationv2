import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: '#FB7500' ,
    border: '2px solid #FB7500',
    borderRadius: 30,
    color: 'white',
    height: 51,
    width: '90%',
    fontSize: 16,
    fontWeight: '900',
    margin: '0 5px',
    position: 'fixed',
    bottom: 8,
    left: '50%',
    transform: 'translateX(-50%)',
    lineHeight: '20px',
  },
});

export default function ApplyButton() {
  const classes = useStyles();
  return <Button className={classes.root}>Aplicar</Button>;
}