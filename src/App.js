import React, { Component } from 'react';
import Map from './components/Map.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Map />
        </main>
      </div>
    );
  }
}

export default App;
