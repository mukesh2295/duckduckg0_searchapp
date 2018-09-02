import React, { Component } from 'react';
import axios from 'axios';
import Home from './container/Home/Home';
import Footer from './Footer/Footer';
import Suscribe from './Suscribe/Suscribe';
import TweeterCards from './TweeterCards/TweeterCards';
import Blog from './Blog/Blog';
import Privacy from './Privacy/Privacy';
import Menubar from './Menubar/Menubar';
import CarousalExample from './CarousalExample/CarousalExample';
import Search from './container/OurStory/search/Search';


class App extends Component {
   
    state = {
         showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
      this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
          this.setState( (prevState) => {
            return { showSideDrawer :!prevState.showSideDrawer };
          });
    }
  
  render() {
    return (
      <div className="App">
     {/*<section> <Search/></section> */}
      {/*<section style = {{paddingLeft : '20px' , paddingRight:'20px' , paddingTop: '90px'}}> <CarousalExample/> </section> 
      {/*<section> <Menubar drawerToggleClicked = {this.sideDrawerToggleHandler}/> </section>  */}
         <section> <Home/></section>  

         

         <section><TweeterCards/></section>  

          <section><Privacy/></section>
          <section><Blog/></section>
          <section><Suscribe/></section>

          <section><Footer/></section>  
          
      </div>
    );
  }
}

export default App;
