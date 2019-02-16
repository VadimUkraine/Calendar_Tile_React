import React, { Component } from 'react';
import './EventTitle.css';



class EventTitle extends Component {

  render() {

    return (
      <h2 className="event_title">
        {this.props.selectDay.day} of {this.props.selectDay.month}
      </h2>
    );
  } 
}

export default EventTitle;