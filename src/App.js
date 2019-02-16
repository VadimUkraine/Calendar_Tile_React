import React, { Component } from 'react';
import './App.css';
import yearData  from './constans'
import Month from './components/Month/Month';
import PopUp from './components/PopUp/PopUp';
import * as uuid from 'uuid/v4'


class App extends Component {

    constructor(props) {
    super(props);

    this.state = {
      calendarData: yearData,
      isOpenModal: false,
      theme: ['holiday', 'birthday', 'meeting','state holiday', 'other'],
      selectDay:{
        day: '',
        month: '',
        events:[]
      }

    }

      this.togglePopUp = this.togglePopUp.bind(this);
      this.handleSelectDay = this.handleSelectDay.bind(this);
      this.addEvent = this.addEvent.bind(this);
      this.deleteEvent = this.deleteEvent.bind(this);
      this.changeEvent = this.changeEvent.bind(this);
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('calendar'))){
       this.setState({calendarData: JSON.parse(localStorage.getItem('calendar'))});
    }   
  }

  togglePopUp(){
    this.setState({
      isOpenModal: !this.state.isOpenModal
    });
  }

  handleSelectDay(day, month, events){
    this.setState({
      selectDay: {
        day: day,
        month: month,
        events: events
      }
    });
  }

  addEvent(name, theme){
    let neutralBase = this.state.calendarData;
 
    for (let key = 0; key < neutralBase.length; key++){
      if(neutralBase[key].month === this.state.selectDay.month){
        for(let bKey=0; bKey< neutralBase[key].days.length; bKey++){
          if(neutralBase[key].days[bKey].day === this.state.selectDay.day){
            neutralBase[key].days[bKey].events.push(
              {id: uuid(),
               name: name,
               theme: theme})
          }
        }
      }
    }

    this.setState({
      calendarData: neutralBase
    });
    localStorage.setItem("calendar", JSON.stringify(this.state.calendarData))

  }

  deleteEvent(id){
    let neutralEvents = this.state.selectDay;

    for (let key = 0; key < neutralEvents.events.length; key++){
        if(neutralEvents.events[key].id === id){
          let beforeEvent=neutralEvents.events.slice(0,[key]);
          let afterEvent=neutralEvents.events.slice([key+1]);
          neutralEvents.events = beforeEvent.concat(afterEvent);
        }
    }

    this.setState({
      selectDay:  neutralEvents
    }); 

    let neutralBase = this.state.calendarData;
 
    for (let key = 0; key < neutralBase.length; key++){
      if(neutralBase[key].month === this.state.selectDay.month){
        for(let bKey=0; bKey< neutralBase[key].days.length; bKey++){
          if(neutralBase[key].days[bKey].day === this.state.selectDay.day){
            neutralBase[key].days[bKey].events = this.state.selectDay.events;
          }
        }
      }
    }

    this.setState({
      calendarData: neutralBase
    });
    localStorage.setItem("calendar", JSON.stringify(this.state.calendarData))

  }

  changeEvent(name, theme, id){
    let neutralEvents = this.state.selectDay;

    for (let key = 0; key < neutralEvents.events.length; key++){
        if(neutralEvents.events[key].id === id){
          neutralEvents.events[key].name = name;
          neutralEvents.events[key].theme = theme;
        }
    }

    this.setState({
      selectDay:  neutralEvents
    }); 

    let neutralBase = this.state.calendarData;
 
    for (let key = 0; key < neutralBase.length; key++){
      if(neutralBase[key].month === this.state.selectDay.month){
        for(let bKey=0; bKey< neutralBase[key].days.length; bKey++){
          if(neutralBase[key].days[bKey].day === this.state.selectDay.day){
            neutralBase[key].days[bKey].events = this.state.selectDay.events;
          }
        }
      }
    }

    this.setState({
      calendarData: neutralBase
    });
    localStorage.setItem("calendar", JSON.stringify(this.state.calendarData))
  }

 
  render() {

    return (
      <main className="App">
        <h1>2019 Calendar</h1>      
        <div className="calendar_wrap">
          {this.state.calendarData.map((item, index) =>(
              <Month 
               key={uuid()}
               weeks ={item.weeks}
               monthName ={item.month}
               days={item.days}
               index={index}
               togglePopUp={this.togglePopUp}
               handleSelectDay={this.handleSelectDay}               
              />
            ))}
        </div>
        
        {
          this.state.isOpenModal ?
          <PopUp 
            theme={this.state.theme}
            selectDay={this.state.selectDay}
            togglePopUp={this.togglePopUp}
            addEvent={this.addEvent}
            deleteEvent={this.deleteEvent}
            changeEvent={this.changeEvent}
          /> : null
        }
      </main>
    );
  }
}

export default App;
