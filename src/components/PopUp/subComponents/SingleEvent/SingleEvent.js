import React, { Component } from 'react';
import './SingleEvent.css';
import * as uuid from 'uuid/v4'


class SingleEvent extends Component {

    constructor(props) {
    super(props);

    this.state = {
      isEventTheme: props.themeEvent,
      isEventName: props.nameEvent,
      isDisabled: true,

    }

      this.resolveEvent = this.resolveEvent.bind(this);
      this.changeEventName = this.changeEventName.bind(this);

  }

  changeEventTheme(event){
      this.setState({isEventTheme: event.target.value});
  }

  changeEventName(event){
     this.setState({[event.target.name]: event.target.value});
  }


  resolveEvent(){
    if(this.state.isDisabled === true){
      this.setState({isDisabled: false});
    }else{
      this.setState({isDisabled: true});    
      this.props.changeEvent(this.state.isEventName, this.state.isEventTheme, this.props.id)
    }
    
  }



  render() {
    
    return (
      <li className="event_list_item">       
        <select 
          className="event_list_select" 
          value={this.state.isEventTheme} 
          onChange={(e) => this.changeEventTheme(e)}
          disabled={this.state.isDisabled}          
          >
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
          id="event_list_feild"
          type="text" 
          name="isEventName"
          onChange={this.changeEventName} 
          value={this.state.isEventName}
          disabled={this.state.isDisabled} 
          />
        <div className="event_list_btns">
          <button 
            className="event_list_edit_btn"
            type="button"
            onClick={this.resolveEvent}
            >
            {this.state.isDisabled === true ? 'Edit' : 'Done'}
          </button>
          <button 
            className="event_list_delete_btn"
            type="button"
            onClick={()=>this.props.deleteEvent(this.props.id)}
            >
            Delete
          </button>
        </div> 
      </li>
    );
  }
}

export default SingleEvent;
