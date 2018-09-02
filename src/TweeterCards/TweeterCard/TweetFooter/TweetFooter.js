import React , {Component} from 'react';
import { Card, CardImg, CardHeader,CardText, CardBody, CardLink, CardTitle, CardSubtitle , CardFooter} from 'reactstrap';
import Twitter_reply from '../../../assests/images/twitter_reply.svg';
import Twitter_like from '../../../assests/images/twitter_like.svg';
import Twitter_retweet from '../../../assests/images/twitter_retweet.svg';


 {/*class TweetFooter extends Component {
	render() {
		return( */}

        var TweetFooter = (props) => (
			<CardFooter className = "tw_card_link"> 
                <a href="https://twitter.com/intent/tweet?in_reply_to=1017404966552498176" data-wrapped="true" className="tw_card_reply" aria-label="Reply to this tweet" title="Reply to this tweet">
                <img src= {Twitter_reply} aria-hidden="true"/>
                </a>
                <a href="https://twitter.com/intent/retweet?tweet_id=1017404966552498176" data-wrapped="true" className="tw-card__link tw-card__action js-tweet-action" aria-label="Retweet button" title="Retweet button">
                <img src= {Twitter_retweet} aria-hidden="true"/></a>
                <a href="https://twitter.com/intent/like?tweet_id=1017404966552498176" data-wrapped="true" className="tw-card__link tw-card__action js-tweet-action" aria-label="Like button" title="Like button">
                <img src= {Twitter_like} aria-hidden="true"/></a>
                <a href="https://twitter.com/duckduckgo/status/1017404966552498176" className="tw-card__date tw-card__link t-bold"  >
                <time style ={{float:'right' , color: '#333' , textDecoration: 'none'}}>Thu Jul 12</time> </a>
            </CardFooter>
		);
{/*	}
} */}

export default TweetFooter;