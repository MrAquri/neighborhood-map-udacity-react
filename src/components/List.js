import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'

class List extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.clearQuery()
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  render() {

    //Importing data from Map.js
    const {map, infowindow, fetchWiki} = this.props

    // Implementing filtering options
    let showingLocations
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingLocations = this.props.markers.filter((name) => match.test(name.title))
    } else {
      showingLocations = this.props.markers
    }

    return (
      <div id='list'>
      <h3 className='fav-places'> My Favourite Places</h3>
        <form className='search-form'>
          <input
            className='search-location'
            type='text'
            placeholder='Find location'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            tabIndex={0}
            aria-label='Search location'
            />
          <button
            className='clear-button'
            tabIndex={0}
            onClick={this.handleSubmit}
            onKeyPress={this.handleSubmit}>
            Clear
          </button>
        </form>

        <ul className='search-list'>
        {showingLocations.map(marker => (
          <li
            key={marker.title}
            tabIndex={0}
            onClick={() => fetchWiki(marker, infowindow, map)}
            onKeyPress={(e) => {if (e.key === 'Enter') fetchWiki(marker, infowindow, map)}}
            >
            {marker.title}
          </li>
        ))
        }
        </ul>
      </div>
    )
  }
}

export default List
