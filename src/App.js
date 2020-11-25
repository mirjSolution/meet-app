import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 5,
  };

  updateEvents = (location, eventCount) => {
    let locationEvents;
    getEvents().then((events) => {
      if (location === 'all') {
        locationEvents = events;
      } else {
        locationEvents = events
          .slice(0, eventCount)
          .filter((event) => event.location === location);
      }
      this.setState({
        events: locationEvents,
      });
    });
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.eventCount),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className='App'>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          eventCount={this.state.eventCount}
        />
        <NumberOfEvents
          eventCount={this.state.eventCount}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
