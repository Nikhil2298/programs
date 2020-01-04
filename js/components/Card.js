import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ReactShadowScroll from 'react-shadow-scroll';
import Alumnis from '../components/Alumnis';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "250px", 
  },
  control: {
    padding: theme.spacing(2),
  },

}));

export default function Review() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
};
    
    
  return (

    <ReactShadowScroll>
    <Grid container className={classes.root}   justify="center" sm={12} >
      
      <Grid item sm={6}>
        <Grid container justify="center" alignItems="center" sm={12}  spacing={1}>
           

            <Alumnis />
            
            <Alumnis />
          
            <Alumnis />
            
        </Grid>
      </Grid>
      
      <Grid item sm={6}>
        <Grid container justify="center" alignItems="center" sm={12}  spacing={1}>
          
            <Alumnis />
          
          
            <Alumnis />
          
            <Alumnis />
            
        </Grid>
      </Grid>
      
      </Grid>
      </ReactShadowScroll>
  );
}