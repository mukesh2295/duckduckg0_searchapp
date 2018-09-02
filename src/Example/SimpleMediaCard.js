import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Privacy from '../assests/images/privacy.svg';
import Search from '../assests/images/search.svg';
import Launch from '../assests/images/launch.svg';
import Gift from '../assests/images/gift.svg';

const styles = {
  card: {
    maxWidth: 345,
    flex: '1 1 180px',
    padding: '16px 0px 30px',
    marginLeft: '30px',
    marginBottom: '30px',
    boxSizing: 'border-box',
    color: '#333',
    display: 'block',
    borderRadius: '5px',
    boxShadow: '0 22px 48px -12px rgba(0,0,0,0.12)',
    alignItems:'center',
    justifyContent: 'center',
  },
  media: {
    height: 0,
    //paddingTop: '56.25%', // 16:9
    width: '108px',
    maxWidth: '100%',
    border: 'none',
    paddingTop:'65px',
    //marginLeft: '65px',
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={Privacy}/>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h3" style = {{padding:'0',fontSize:'44px',lineHeight:'1',color:'#111',marginBottom:'9px',lineHeight:'1',fontWeight: 'bold'}}>
           16GB
          </Typography>
           <Typography gutterBottom variant="headline" component="h4" style = {{padding:'0',fontSize:'22px',lineHeight:'1',color:'#111',marginBottom:'15px',lineHeight:'1',fontWeight: 'bold'}}>
           Private Searches
          </Typography>
          <Typography component="p" style = {{padding: '0px' ,fontSize: '16px', lineHeight: '1' ,color: '#666'}}>
            And Counting
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
