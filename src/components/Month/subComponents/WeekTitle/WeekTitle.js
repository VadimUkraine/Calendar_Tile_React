import React, { Component } from 'react';
import './WeekTitle.css';



class WeekTitle extends Component {


  render() {

    return (
      <ul className="weeks_title_wrap">
        <li className="weeks_title_item">S</li>
        <li className="weeks_title_item">M</li>
        <li className="weeks_title_item">T</li>
        <li className="weeks_title_item">W</li>
        <li className="weeks_title_item">T</li>
        <li className="weeks_title_item">F</li>
        <li className="weeks_title_item">S</li> 
      </ul>
    );
  }
}

export default WeekTitle;