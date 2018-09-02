import React, { Component } from 'react';
import classes from './Home.css';

import DuckDuckGoLogo from  '../../assests/images/DuckDuckgo.svg';
import Hiker from '../../assests/images/DuckDuckgo2.svg';
import Privacy from '../../assests/images/privacy.svg';
import Search from '../../assests/images/search.svg';
import Launch from '../../assests/images/launch.svg';
import Gift from '../../assests/images/gift.svg';
import { Container, Row, Col } from 'react-grid-system';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

const Home = (props) => (

 			<div className = "Home">
          <div className = "Menubar">

       		</div>
       		<div className = "HomeLogo" >
         		<div>
             		<img style = {{width: '104px'}}className="abt_hero__logo" src={DuckDuckGoLogo} alt="DuckDuckGo Dax Logo"/>
            		<h1 className="abt_hero__title">Welcome to DuckDuckGo</h1>
				        <p className="abt_hero__text">We’re setting the new standard of trust online, empowering people to take control of their information.</p>
				    </div>
				        <img className="abt_hero__img" src={Hiker} aria-hidden="true"/>
          </div>

      {/*   <div className = "Home_timeline">
        		<div className = "Home_timeline_top">
           		<p className = "Home_timeline_text" ><b>You deserve privacy</b>. companies are <b>making money</b> off of <b>your private information</b> online without your consent.
           		 br/><br/> At DuckDuckGo, we don’t think the Internet should feel so <b>creepy</b> and getting the privacy you deserve online should be as <b>simple</b> as closing the blinds.</p>
              <hr className = "abt_hr" /> 
              <h3 class="abt_Fast_facts_text">Fast Facts</h3>
            </div>

            <div style ={{marginBottom: '-240px'}}>
            <Container className = "container">
            <Row>
             <Col md={3} className = "fact_search_card"> 
              <Card className = "Card1">
                  <a className = "fact_card_traffic" href = "https://duckduckgo.com/traffic">
                    <img className = "fact_card_icon" src = {Search} aria-hidden="true"/>
                    <h3 className = "fact_card_title">16B</h3>
                    <h4 className = "fact_card_subtitle">Private Searches</h4>
                    <CardText className = "fact_card_text">And Counting</CardText>
                  </a>
              </Card>
             </Col> 
             <Col md={3} className = "fact_search_card"> 
               <Card className = "Card1">
                <a className = "fact_card_traffic" href = "https://duckduckgo.com/traffic">
                      <img className = "fact_card_icon" src = {Privacy} aria-hidden="true"/>
                      <h3 className = "fact_card_title">16B</h3>
                      <h4 className = "fact_card_subtitle">Private Searches</h4>
                      <CardText className = "fact_card_text">And Counting</CardText>
                </a>
               </Card> 
             </Col>
             <Col md={3} className = "fact_search_card"> 
              <Card className = "Card1">
               <a className = "fact_card_traffic" href = "https://duckduckgo.com/traffic">
                    <img className = "fact_card_icon" src = {Launch} aria-hidden="true"/>
                    <h3 className = "fact_card_title">53</h3>
                    <h4 className = "fact_card_subtitle">Employees</h4>
                    <CardText className = "fact_card_text">Making it happen</CardText>
               </a>
              </Card> 
             </Col> 
             <Col md={3} className = "fact_search_card"> 
              <Card className = "Card1">
                <a className = "fact_card_traffic" href = "https://duckduckgo.com/traffic">
                    <img className = "fact_card_icon" src = {Gift} aria-hidden="true"/>
                    <h3 className = "fact_card_title">$800k</h3>
                    <h4 className = "fact_card_subtitle">Donated</h4>
                    <CardText className = "fact_card_text">Privacy Donations</CardText>
                </a> 
              </Card>
             </Col>
             </Row>

             </Container>
            </div>

          </div> */}

 			</div>
                
			);
	


export default Home;


