import React, { Component } from 'react';
import './ListDays.css';
import * as uuid from 'uuid/v4'
import Day from '../Day/Day';


class ListDays extends Component {

    constructor(props) {
    super(props);

    this.state = {
        isIndex: props.index,
        isFirstDay: props.days[0].day,
        isDayStub: ''
      }

  }

  componentDidMount() {
    let dayStartWeek = new Date(2019, this.state.isIndex, this.state.isFirstDay).getDay();
    if(dayStartWeek === 1){
      this.setState({isDayStub: 'm_1'})
    }else if(dayStartWeek === 2){
      this.setState({isDayStub: 'm_2'})
    }else if(dayStartWeek === 3){
      this.setState({isDayStub: 'm_3'})
    }else if(dayStartWeek === 4){
      this.setState({isDayStub: 'm_4'})
    }else if(dayStartWeek === 5){
      this.setState({isDayStub: 'm_5'})
    }else if(dayStartWeek === 6){
      this.setState({isDayStub: 'm_6'})
    }else{
      this.setState({isDayStub: 'default'})
    }
  }


  render() {    

    const renderDays = this.props.days.map((item)=>(
           <Day 
            key={uuid()} 
            day={item.day} 
            events={item.events}
            monthName={this.props.monthName} 
            togglePopUp={this.props.togglePopUp}
            handleSelectDay={this.props.handleSelectDay}
            />       
      ))


    

    return (
      <ul className="days_wrap">
        <li className={this.state.isDayStub}></li>
        {renderDays} 
      </ul>
    );
  }
}

export default ListDays;
