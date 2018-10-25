import React, { Component } from 'react';
import Map from './Map.js'

class List extends Component {

  state = {
    query: ''
  }

  updateQuery = (event) => {
    this.setState({query: event.target.value})
  }

  render() {
    return (
      <div id='list'>My Favourite Places
        <form className='search-form'>
          <input className='search-location' placeholder='Find location' onChange={this.updateQuery }/>
        </form>
        <ul className='search-list'>
        
        </ul>
      </div>
    )
  }
}

export default List
