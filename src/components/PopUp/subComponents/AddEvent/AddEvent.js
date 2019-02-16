import React, { Component } from 'react';
import './AddEvent.css';
import * as uuid from 'uuid/v4'


class AddEvent extends Component {

    constructor(props) {
    super(props);

    this.state = {
        isValueEvent: '',
        isThemeEvent: 'holiday'

      }

      this.changeField = this.changeField.bind(this);
      this.addEvent = this.addEvent.bind(this);

  }


  changeField(event){
      this.setState({ [event.target.name]: event.target.value});
  }

  chooseTheme(event) {
    this.setState({ isThemeEvent: event.target.value});

  }


  addEvent(event){
      this.props.addEvent(this.state.isValueEvent, this.state.isThemeEvent);
      this.setState({ 
        isThemeEvent: 'holiday',
        isValueEvent: '',
      });
  }






  render() {

    return (
      <div className="add_event_wrap">
        <select className="add_event_select" value={this.state.isThemeEvent} onChange={(e) => this.chooseTheme(e)}>
          {this.props.theme.map((theme) => {
            return (
              <option 
                key={uuid()} 
                value={theme} 
              >{theme}</option>
            );
          })}
        </select>
        <input 
          id="add_event_feild"
          type="text" 
          name="isValueEvent"
          onChange={this.changeField} 
          value={this.state.isValueEvent}
          placeholder="New Event"
          />
        <button 
          className="add_event_btn"
          type="button"
          onClick={this.addEvent}
          >
          Add New
        </button>
      </div>
    );
  } 
}

export default AddEvent;