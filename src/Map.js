import React, { Component } from 'react';
import './Map.css'

class Map extends Component {

  state = {
    locations: [
      {
      title: 'Manufaktura',
      location: {lat: 51.779444, lng: 19.4475}
    },
    {
      title: 'Piotrkowska',
      location: {lat: 51.776111, lng: 19.454722}
    },
    {
      title: 'ZOO',
      location: {lat: 51.761094, lng: 19.412197}
    },
    {
      title: 'Palm House',
      location: {lat: 51.760348, lng: 19.480125}
    },
    {
      title: 'Ksiezy Mlyn',
      location: {lat: 51.755833 , lng: 19.481944}
    },
    ],
    markers: []

  }

  // Render map after the page is loaded
  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    addScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCfmahp_Yr8FwseTtovWCgUYtfOQL8cSnM&callback=initMap")
    window.initMap = this.initMap
  }

  // Method initializing and rendering the google map
  initMap = () => {
    var map
    map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.759445, lng: 19.457216},
      zoom: 13
    })

    // Looping through all of the locations
    for (var i = 0; i < this.state.locations.length; i++) {
      // Gathering position and title from the array
      var position = this.state.locations[i].location
      var title = this.state.locations[i].title

      // Creating a marker per location
      var marker = new window.google.maps.Marker({
        map: map,
        position: position,
        title: title,
        animation: window.google.maps.Animation.DROP,
        id: i
      })
      // Pushing the marker array to the array of markers
      this.state.markers.push(marker)
    }

  }

  render() {
    return (
      <div id='map'> </div>
    )
  }
}

  // Function creating script element and adding it to the index.html file
  function addScript(url) {
    var index = window.document.getElementsByTagName('script')[0]
    var script = window.document.createElement('script')
    script.src = url
    script.async = true
    script.defer = true
    script.onError = function() {
      document.write = 'Google Maps not found'
    }
    index.parentNode.insertBefore(script, index)
  }

export default Map;
