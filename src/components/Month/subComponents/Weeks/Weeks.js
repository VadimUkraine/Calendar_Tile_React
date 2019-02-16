import React, { Component } from 'react';
import './Weeks.css';
import * as uuid from 'uuid/v4'


class Weeks extends Component {

    constructor(props) {
    super(props);

    this.state = {


      }

  }


  render() {
 
    const renderWeeks = this.props.weeks.map((week)=>(
           <li key={uuid()} className="weeks_item">{week}</li>       
      ))

    return (
      <ul className="weeks_wrap">
        <li className="weeks_item_title">W</li>
        {renderWeeks} 
      </ul>
    );
  }
}

export default Weeks;
