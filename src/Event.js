import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';

class Event extends Component {
  state = {
    showHideDetails: false,
  };

  handleShowHideButton = () => {
    if (this.state.showHideDetails === true) {
      this.setState({ showHideDetails: false });
    } else {
      this.setState({ showHideDetails: true });
    }
  };

  render() {
    const { event } = this.props;
    return (
      <div className='event-container'>
        <h1 className='name'>{event.summary}</h1>
        <Moment format='LLLL'>
          {moment.utc(event.start ? event.start.dateTime : '')}
        </Moment>

        <p className='locations'>{event.location}</p>

        {this.state.showHideDetails && (
          <div className='event-details'>
            <h2>About event:</h2>
            <a target='_blank' rel='noreferrer' href={event.htmlLink}>
              See Details on Google Calendar
            </a>
            <p>{event.description}</p>
          </div>
        )}

        <button
          className='show-hide-btn'
          onClick={() => this.handleShowHideButton()}
        >
          {!this.state.showHideDetails ? 'Show Details' : 'Hide Details'}
        </button>
      </div>
    );
  }
}
export default Event;
