import React, { Component } from 'react';
import TweeterCard from './TweeterCard/TweeterCard';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import { Container, Row, Col } from 'react-grid-system';
import axios from 'axios';
import classes from './TwitterCard.css';
import PrevArrow from './Arrow/PrevArrow';
import NextArrow from './Arrow/NextArrow';
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';
import Example from '../Example/Example';
import SimpleMediaCard from '../Example/SimpleMediaCard';
import GridLayout from '../Example/GridLayout';
import Button from '@material-ui/core/';

class TweeterCards extends Component {


	render() {
	    return (

	        <div className="TweeterCards" >

	    	
	    	
	    {/*	<Container className = "container">
			 <Row>
			  <Col md={3} className = "col_PrevArrow"> <Example/></Col> 
			  <Col md={6} className = "col_TweeterCard"> 
			 	<TweeterCard />
			  </Col>
			  <Col md={3} className = "col_NextArrow"> <Example/> </Col> 
			 </Row>
			</Container> */ }
	        
	     	<div className = "newHome">
	     	<div className = "newHome_topText">
	     	<p className = "Home_timeline_text" > <b>You deserve privacy</b>. Companies are <b>making money</b> off of <b>your private information</b> online without your consent.
           		<br/><br/> At DuckDuckGo, we don’t think the Internet should feel so <b>creepy</b> and getting the privacy you deserve online should be as <b>simple</b> as closing the blinds.</p>
              <hr className = "abt_hr" /> 
              <h3 className="abt_Fast_facts_text">Fast Facts</h3>
	        { /* <div style = {{marginLeft:'80px' , marginRight: '80px' ,zIndex: '25' ,position: 'relative' ,paddingTop: '20px', marginBottom: '-240px'  }}> */ }
	        <div>
	        <GridLayout/>
	        </div>
	        </div>
	        </div>
	        </div>

	    );
	}
}

export default TweeterCards;
