import React from 'react';
import Map from './components/Map.js'

import './App.css';

function App() {
  return (
    <div className="App" role='application'>
        <div className='header' role='banner'>Neighborhood Map</div>
        <div className='container' role='main'>
          <Map />
        </div>
    </div>
  )
}

export default App;
