import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import classes from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      	<Container>
          <Row>
            <Col sm={6} >
            	<Row>
            		<Col sm={6} >
  	            	<h5 style ={{marginLeft: '40px'}} className="blk--foot__nav-head">DuckDuckGo</h5>
  	            		<ul>
          							<li><a className="js-static-foot-link" href="https://duckduckgo.com/about">About</a></li>
          							<li><a className="js-static-foot-link" href="https://duckduckgo.com/app">App</a></li>
          							<li><a className="js-static-foot-link" href="https://duckduckgo.com/traffic">Traffic</a></li>
          							<li><a className="js-static-foot-link" href="https://duckduckgo.com/privacy">Privacy</a></li>
          							<li><a className="js-static-foot-link" href="https://duckduckgo.com/press">Press</a></li>
  						      </ul>
            		</Col>

            		<Col sm={6} >
            			<h5 style ={{marginLeft: '40px'}} className="blk--foot__nav-head">Follow Us</h5>
              			<ul>
          							<li><a className="js-static-foot-link" href="https://spreadprivacy.com/">Blog</a></li>
          							<li><a className="js-static-foot-link" href="https://twitter.com/duckduckgo">Twitter</a></li>
          							<li><a className="js-static-foot-link" href="https://reddit.com/r/duckduckgo">Reddit</a></li>
  						      </ul>
            		</Col>
            	</Row>
            </Col>

            <Col sm={6} >
            	 <h5 className="blk--foot__nav-head">About Us</h5>
            	 <p style={{marginRight: '30px'} }className="pb-3">DuckDuckGo is an Internet privacy company that empowers you to seamlessly take control of your personal information online, without any tradeoffs. With our roots as the search engine that doesn’t track you, we’ve expanded what we do to protect you
					      no matter where the Internet takes you.</p>
				       <a className="blk--foot__nav-link js-static-foot-link" href="https://duckduckgo.com/about">Learn more about our story <span className="ddgsi ddgsi-right-sign"></span></a>
            </Col>

          </Row>
        </Container>    
        
      </div>
    );
  }



}

export default Footer;
