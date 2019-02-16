import React, { Component } from 'react';
import './Month.css';
import Weeks from './subComponents/Weeks/Weeks';
import WeekTitle from './subComponents/WeekTitle/WeekTitle';
import ListDays from './subComponents/ListDays/ListDays';



class Month extends Component {

    constructor(props) {
    super(props);

    this.state = {

      }

  }


  render() {  

    return (
      <div className="month_wrap">
        <h1 className="month_title">{this.props.monthName} 2019</h1>
        <div className="month_dates_weeks_wrap">
          <Weeks weeks={this.props.weeks}/> 
          <div className="">
            <WeekTitle />
            <ListDays 
              days={this.props.days} 
              index={this.props.index} 
              monthName={this.props.monthName} 
              togglePopUp={this.props.togglePopUp}
              handleSelectDay={this.props.handleSelectDay}
              />
          </div>
        </div>

 
      </div>
    );
  }
}

export default Month;
