import React, { Component } from 'react';
import Map from './components/Map.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className='header'>Neighborhood Map</div>
          <div className='container'>
            <Map />
          </div>
      </div>
    );
  }
}

export default App;
