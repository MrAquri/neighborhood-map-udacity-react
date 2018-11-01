import React, { Component } from 'react';
import Map from './components/Map.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" role='application'>
          <div className='header' role='banner'>Neighborhood Map</div>
          <div className='container' role='main'>
            <Map />
          </div>
      </div>
    );
  }
}

export default App;
