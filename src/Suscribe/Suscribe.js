import React, { Component } from 'react';
import classes from './Suscribe.css';
class Suscribe extends Component {


  render() {
    return (
      <div className="Suscribe">
      
      <h2 className="abt__title">Get a Crash Course on Privacy</h2>
      <p className="abt__subtitle">Sign up for our newsletter and learn about protecting your online privacy.</p>
      <form className="frm--newsletter" action="https://duck.co/s/a" method="post" name="y">
			<input type="hidden" name="page" value="1"/>
			<input type="hidden" name="campaign" value="b"/>
			<input type="hidden" name="flow" value="about"/>
			<input type="email" placeholder="Your email address" className="abt__input" name="email"  />
			<input type="submit" value="Subscribe" className="abt__btn" />
	  </form>

	  <p className="abt__newsletter_text">Your email address will not be shared or associated with anonymous searches. <a class="abt__newsletter__link" href="https://spreadprivacy.com/google-search-history-4bae7619407d">Example Message</a></p>
        
      </div>
    );
  }
}

export default Suscribe;
