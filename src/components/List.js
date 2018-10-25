import React, { Component } from 'react';

class List extends Component {

  state = {
    query: ''
  }

  updateQuery = (event) => {
    this.setState({query: event.target.value})
  }

  render() {
    console.log(this.props.markers)
    return (
      <div id='list'>My Favourite Places
        <form className='search-form'>
          <input className='search-location' placeholder='Find location' onChange={this.updateQuery }/>
        </form>

        <ul className='search-list'>
{/*
          {this.props.markers.filter(marker => (
            <li key={marker.title}>
              {marker.title}
            </li>
          ))
          }
          */}
        </ul>
      </div>
    )
  }
}

export default List
