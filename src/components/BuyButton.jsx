import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: '#FB7500',
    border: 0,
    borderRadius: 39,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    width: 145,
    fontSize: 16,
    fontWeight: 900,
    margin: '0 5px'
  },
});

export default function BuyButton() {
  const classes = useStyles();
  return <Button className={classes.root}>Comprar</Button>;
}