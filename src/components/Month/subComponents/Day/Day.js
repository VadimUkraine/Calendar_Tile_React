import React, { Component } from 'react';
import './Day.css';


class Day extends Component {

    constructor(props) {
    super(props);

    this.state = {


      }

      this.selectLocalDate = this.selectLocalDate.bind(this);
  }

  selectLocalDate(){
      this.props.handleSelectDay(this.props.day, this.props.monthName, this.props.events);
      this.props.togglePopUp();
  }


  render() {

    return (
      <li 
        className={this.props.events.length ? 'days_item_events' : 'days_item'}
        onClick={this.selectLocalDate}      
        >
        {this.props.day}
      </li>
    );
  }
}

export default Day;
