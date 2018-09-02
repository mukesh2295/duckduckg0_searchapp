import React, { Component } from 'react';
import classes from './Blog.css';
import { Container, Row, Col } from 'react-grid-system';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle , CardHeader, CardFooter} from 'reactstrap';
import Duck from '../assests/images/duck.png';
import Hand from  '../assests/images/hand.png';
import InstaFb from  '../assests/images/instafacebook.jpeg';

const Blog = (props) => (

	   <div className = "Mission">
	    <div className ="abt_mission" >
		   	<h2 className = "abt_mission_title" > Our Mission</h2>
		    <p className = "abt_mission_subtitle">Too many people believe that you simply can not expect privacy on the Internet. We disagree and have made it our mission to set a new standard of trust online.</p>
	     <div className = "After_mission_subtitle">
		    <hr className = "abt_hr"/>
		    <h3 className = "abt_small_text"> from our blog</h3> 

	   
		 <Container className = "Abt_blog">
            <Row className = "blog_row">

             <Col md={4} >
             <a href="https://spreadprivacy.com/three-reasons-why-the-nothing-to-hide-argument-is-flawed/" style = {{textDecoration :'none'}}>
             <Card className = "Blog_Privacy_search_card" style ={{backgroundColor : 'white'}}>
                <CardImg className = "cardImage" src = {Hand}/>
                <CardText className = "CardContent">
		        <h3 className ="blog-card_title"> Three Reasons Why the "Nothing to Hide" Argument is Flawed </h3>
	  			
                </CardText>
                <CardText className = "CardContent"><p className = "blog-card_topic">Privacy Research</p></CardText>
             </Card></a>
             </Col> 


             <Col md={4} >
             <a href="https://spreadprivacy.com/2018-duckduckgo-privacy-donations-results/" style = {{textDecoration :'none'}} data-id="1">
             <Card className = "Blog_Privacy_search_card">
             	<CardImg className = "cardImage" src = {Duck}/>
             	<CardText className = "CardContent">
             	<h3 className="blog-card_title">2018 DuckDuckGo Privacy Donations: $500,000 + $142,000 From You!</h3>
                </CardText>
                <CardText className = "CardContent">
             	<p className="blog-card_topic">DuckDuckGo News</p>
                </CardText>
             </Card></a>
             </Col>

             <Col md={4} >
             <a href="https://spreadprivacy.com/facebook-instagram/" style = {{textDecoration :'none'}} data-id="2">
             <Card className = "Blog_Privacy_search_card">
                <CardImg className = "cardImage" src = {InstaFb}/>
                <CardText className = "CardContent">
             		<h3 className="blog-card_title">A Majority of Americans Don not Know That Facebook Owns Instagram</h3>
                </CardText>  
                <CardText className = "CardContent">
             		<p className="blog-card_topic">Privacy Research</p>
             	</CardText>
             </Card></a>
             </Col>
            </Row>
         </Container>    
        </div>
        </div>
        </div>
	);

export default Blog;
