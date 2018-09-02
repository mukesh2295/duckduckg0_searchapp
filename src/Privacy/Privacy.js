import React, { Component } from 'react';
import classes from './Privacy.css';
import { Container, Row, Col } from 'react-grid-system';
import PrivacyTips from '../assests/images/privacy-tips-4.svg';
import SearchSheild from '../assests/images/search-shield.svg';
import Devices from '../assests/images/devices.svg';
import Button from '@material-ui/core/Button';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle , CardHeader, CardFooter} from 'reactstrap';

const Privacy = (props) => (

			<div className = "Privacy_cards">
			 <div className = "Privacy_abt_cards">
			<h2 className="abt__title">Its time to take back your privacy!</h2>
			<Container className = "Privacy_container">
             <Row  className = "Privacy_row">
              <Col md={4} className = "Privacy_card">
              <img className = "Privacy_image" src = {Devices}/>
              <h2 className ="Privacy_card_title_"> Privacy, simplified.</h2>
	  		  <p className = "Privacy_card_topic">Our app and browser extension stop you from being tracked, so you can Internet with peace of mind.</p>
	  		  <a href = "https://duckduckgo.com/app"><button  className = "button">
      				Get Privacy Essentials
    		     </button>
    		  </a>
              </Col>
              <Col md={4} className = "Privacy_card">
              <img className = "Privacy_image" src = {SearchSheild}/>
              <h2 className ="Privacy_card_title"> Search privately.</h2>
	  		  <p className = "Privacy_card_topic">What you search for is your own business. Switch to the search engine that doesn’t track you.</p>
	  		  <a href = "https://duckduckgo.com/"><button  className = "button">
      				Get Privacy Essentials
    		     </button>
    		  </a>
              </Col>
              <Col md={4} className = "Privacy_card">
              <img className = "Privacy_image" src = {PrivacyTips}/>
              <h2 className ="Privacy_card_title"> Get privacy tips.</h2>
	  		  <p className = "Privacy_card_topic">You deserve privacy online. And now with DuckDuckGo’s help, you can learn how to get it.</p>
	  		  <a href = "https://spreadprivacy.com/tag/device-privacy-tips/">
	  		  	<button  className = "button">
      				Stay Informed
    		    </button>
    		  </a>
              </Col>

             </Row>
             </Container> 
			 </div>

			</div>

);


export default Privacy;

