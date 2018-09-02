import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleMediaCard from './SimpleMediaCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop:50,
    justify:'spacing-around',
    marginLeft:'80px' , marginRight: '80px' ,zIndex: '25' ,position: 'relative' ,paddingTop: '20px', marginBottom: '-240px' ,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
});

function GridLayout(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={3} sm={3}>
          <SimpleMediaCard/>
        </Grid>
        <Grid item xs={3} sm={3}>
           <SimpleMediaCard/>
        </Grid>
        <Grid item xs={3} sm={3}>
           <SimpleMediaCard/>
        </Grid>
        <Grid item xs={3} sm={3}>
           <SimpleMediaCard/>
        </Grid>
      </Grid>
    </div>
  );
}

GridLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridLayout);