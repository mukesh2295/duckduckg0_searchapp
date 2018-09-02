import React, { Component } from 'react';
import { Card, CardImg, CardHeader,CardText, CardBody, CardLink, CardTitle, CardSubtitle , CardFooter} from 'reactstrap';
import TweetHeader from './TweetHeader/TweetHeader';
import TweetFooter from './TweetFooter/TweetFooter';
import classes from './Tweetercard.css';
import DuckDuckGo_logo from '../../assests/images/DuckDuckgo.svg';
import Twitter_logo from '../../assests/images/twitter_logo.svg';
import Twitter_verified from '../../assests/images/twitter_verified.svg';

 class TweeterCard extends Component{

   render(){
     return(

      <div className = "TwitterCard" >
        <Card className = "Card1"  >

          <div>
            <TweetHeader/>
          </div>

            <br/>

          <CardBody  className = "card1_text">
              <CardText>While Google says they donot read your email, 
                <a className="tweet_ur_username" href="https://twitter.com/dmac1" data-screen-name="dmac1" rel="nofollow">@dmac1 </a> 
                 reports that third-party developers still can and sometimes do: <a href="https://t.co/xwml7fdQh6"></a> (paywall).
              </CardText>
              <CardText>
                Summary (non-paywall) by <a className="tweet-url username" href="https://twitter.com/richardjnieva" data-screen-name="richardjnieva" rel="nofollow">
                @richardjnieva</a>:  <a href="https://t.co/EDH2eACccz" title="https://www.cnet.com/news/third-party-gmail-apps-reportedly-let-employees-read-peoples-emails/" rel="nofollow">
                cnet.com/news/third-par...</a>
              </CardText>
          </CardBody>

          <div>
            <TweetFooter/>
          </div>
        </Card> 

  { /*     <Card className = "Card2">

              <div>
               <TweetHeader/>
              </div>

              <CardBody className= "card1_text">
             <CardText>We are experiencing a network outage at the moment and apologize for the inconvenience. We will report back soon when it is fixed.</CardText>
             
            </CardBody>

            <div>
              <TweetFooter/>
            </div>

          </Card>

          <Card className = "Card3">

            <div>
               <TweetHeader/>
            </div>

            <CardBody  className = "CardHeader_logo">
              <CardText className= "card1_text">We are experiencing a network outage at the moment and apologize for the inconvenience. We will report back soon when it is fixed.</CardText>
            </CardBody>

            <div>
              <TweetFooter/>
            </div>


         </Card>  */ }
        

    </div>
 
      
    );
  }
 } 
  

export default TweeterCard;

