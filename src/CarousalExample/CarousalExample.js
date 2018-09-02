import React from 'react';
import { Carousel } from "react-responsive-carousel";
import TweeterCard from '../TweeterCards/TweeterCard/TweeterCard';
import { Card, CardImg, CardHeader,CardText, CardBody, CardLink, CardTitle, CardSubtitle , CardFooter} from 'reactstrap';
import DuckDuckGo_logo from '../assests/images/DuckDuckgo.svg';
import Twitter_logo from '../assests/images/twitter_logo.svg';
import Twitter_verified from '../assests/images/twitter_verified.svg';
import classes from './CarousalExample.css';
import { Container, Row, Col } from 'react-grid-system';

 const CarousalExample = () => (

       <Container className = "Abt_blog">
            <Row className = "blog_row">

             <Col md={3} >
             </Col>
             <Col>
       <Carousel  autoPlay={false}
                  useKeyboardArrows={true}
                  dynamicHeight={true}
                  centerSlidePercentage={80}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  width = {500}
                  height = {400}>
        <div style = {{marginTop : '50px' , marginBottom: '90px'}}>
         <img  width="460" height="300" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
           
           {/* <Card style = {{backgroundColor : '#eee' , height : '300px' , width : '400px' , marginLeft : '40px'}}>
             <div className = "cardHeader_logo">
              <a href = "https://twitter.com/duckduckgo" className = "logoLink"><img style = {{float:'left' ,marginRight: '6px', marginTop: '4px',borderRadius: '100%',width: '40px',
                         height:'40px'}} src = {DuckDuckGo_logo}  className= "DuckDuckgoLogo" /></a>
                <div className = "card_left"><a href="https://twitter.com/duckduckgo" style ={{ color:'#333',fontSize:'13px', textDecoration:'none',lineHeight:'1',fontWeight: 'bold', verticalAlign: 'text-top'}}>DuckDuckGo</a>
                 <img style = {{width: '12px' , height: '12px' , marginLeft: '4.5px' , maxWidth:'100%'}} src={Twitter_verified} className="tw_card__verified" aria-hidden="true" /> 
                <a href="https://twitter.com/duckduckgo" style = {{color:'#333',fontSize: '13px', textDecoration:'none', lineHeight:'1', display:'block', marginTop:'-5px'}} >@DuckDuckGo</a></div>
                <img  style = {{width: '27px', height: '22px',marginLeft:'auto',maxWidth:'100%'}} src = {Twitter_logo}  className="twitter_Logo" /> 
                </div>
              
              <p style = {{ margin: '30.5px 0 43px',fontSize:'21px',lineHeight: '1.37',textAlign:'left', whiteSpace: 'pre-wrap'}}>While Google says they donot read your email, 
                <a style = {{fontFamily:'inherit',textDecoration:'none',color: '#4495d4'}} href="https://twitter.com/dmac1" data-screen-name="dmac1" rel="nofollow">@dmac1 </a> 
                 reports that third-party developers still can and sometimes do: <a href="https://t.co/xwml7fdQh6"></a> (paywall).
              </p>
              <p>
                Summary (non-paywall) by <a className="tweet-url username" href="https://twitter.com/richardjnieva" data-screen-name="richardjnieva" rel="nofollow">
                @richardjnieva</a>:  <a href="https://t.co/EDH2eACccz" title="https://www.cnet.com/news/third-party-gmail-apps-reportedly-let-employees-read-peoples-emails/" rel="nofollow">
                cnet.com/news/third-par...</a>
              </p>

            </Card> */}
          </div>


   
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
              </div>
            <div>
              <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
            </div>
            <div>
              <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
            </div>
            <div>
              <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
            </div>
            <div>
              <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
            </div>
            <div>
              <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
            </div>
            <div>
              <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
            </div>
            <div>
              <img src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
            </div>
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
            </div>
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
            </div>
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
            </div>
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
            </div>
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
            </div>
      </Carousel>

      </Col>
      <Col md={3}>
      </Col>
      </Row>
      </Container>

  );
 
export default CarousalExample;