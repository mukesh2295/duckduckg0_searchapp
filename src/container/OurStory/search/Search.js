import React , {Component} from 'react';
import {HorizontalTimeline} from 'react-horizontal-timeline';

import HorizontalTimelineContent from './HorizontalTimelineContent';
import GameInfo from '../Content';

class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state = { value: 0, previous: 0 };
      }

   onclickButton = () =>{
        console.log('The link was clicked.');
       }
      componentWillMount() {
        this.data = GameInfo.map((game, index) => {
          return ({
            date: game.date,
            component: (
              <div className='container' key={index}>
                <h1>{ game.title}</h1>
                <hr />
                <p>{ game.content}</p>
                <hr />
                <p>{game.date}</p>
              </div>
            )
          });
        });
      }
    
    
      render() {
        return (
          <div>
          <div> 
            <button onClick = {this.onclickButton}> debugger </button>
          </div>
          
          <HorizontalTimelineContent
            content={this.data} />
            </div>
        );
      }
    
}

export default Search; 