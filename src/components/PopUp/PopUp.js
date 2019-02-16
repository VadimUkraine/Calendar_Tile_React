import React, { Component } from 'react';
import './PopUp.css';
import AddEvent from './subComponents/AddEvent/AddEvent';
import EventTitle from './subComponents/EventTitle/EventTitle';
import SingleEvent from './subComponents/SingleEvent/SingleEvent';
import * as uuid from 'uuid/v4'



class PopUp extends Component {

    constructor(props) {
    super(props);

    this.state = {
        isFilterTheme: 'all',
      }

  }

  filterThemes(event) {
    this.setState({ isFilterTheme: event.target.value});

  }


  render() {
    
    return (
      <div className="popup_wrap">       
        <div className="popup_form">
          <EventTitle selectDay={this.props.selectDay}/>
          <AddEvent 
            theme={this.props.theme}
            addEvent={this.props.addEvent}
            />
          <div className="event_list_wrap">
            List of Events
            <ul className="event_list">
              {this.props.selectDay.events.map((event)=>{
                return (this.state.isFilterTheme === 'all' ? 
                  <SingleEvent
                   key={event.id}
                   id={event.id}
                   nameEvent={event.name}
                   themeEvent={event.theme}
                   theme={this.props.theme}
                   deleteEvent={this.props.deleteEvent}
                   changeEvent={this.props.changeEvent}
                   />
                  : (event.theme === this.state.isFilterTheme ? 
                    <SingleEvent
                     key={event.id}
                     id={event.id}
                     nameEvent={event.name}
                     themeEvent={event.theme}
                     theme={this.props.theme}
                     deleteEvent={this.props.deleteEvent}
                     changeEvent={this.props.changeEvent}
                   /> : null))} 
              )}           
            </ul>
          </div>
          <div className="filter_close_wrap">
            <div className="filters">
                <span>Filter by</span>
                <select 
                  className="event_select"
                  value={this.state.isFilterTheme} 
                  onChange={(e) => this.filterThemes(e)}
                  >
                  <option value="all">all</option>
                  {this.props.theme.map((theme) => {
                    return (
                      <option key={uuid()} value={theme}>{theme}s</option>
                    );
                  })}
                </select>
            </div>
            <button 
              className="close_popup_btn"
              type="button"
              onClick={this.props.togglePopUp}
              >
              Close
            </button>
          </div>
        </div> 
      </div>
    );
  }
}

export default PopUp;
