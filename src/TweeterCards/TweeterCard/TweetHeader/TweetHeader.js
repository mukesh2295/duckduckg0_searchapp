import React , {Component} from 'react';
import { Card, CardImg, CardHeader,CardText, CardBody, CardLink, CardTitle, CardSubtitle , CardFooter} from 'reactstrap';
import DuckDuckGo_logo from '../../../assests/images/DuckDuckgo.svg';
import Twitter_logo from '../../../assests/images/twitter_logo.svg';
import Twitter_verified from '../../../assests/images/twitter_verified.svg';
import classes from './TweetHeader.css';

{/*class TweetHeader extends Component {
	render() {
		return( */}
			
			const TweetHeader = (props) => (
			    <CardHeader className = "Tweeter_header">
			        <div className = "CardHeader_logo">
			        <a href = "https://twitter.com/duckduckgo"><img style = {{float:'left' }} src = {DuckDuckGo_logo}  className="DuckDuckgoLogo" /></a>
			        <div className = "card_left"><a href="https://twitter.com/duckduckgo" className="tweeterCardName">DuckDuckGo</a>
		            <img src={Twitter_verified} className="tw_card__verified" aria-hidden="true" /> 
		            <a href="https://twitter.com/duckduckgo" className="tw_card_username">@DuckDuckGo</a></div>
		            <img src = {Twitter_logo}  className="twitter_Logo" /> 
		            </div>
			    </CardHeader>
	    );
 {/*   }
} */}

export default TweetHeader;