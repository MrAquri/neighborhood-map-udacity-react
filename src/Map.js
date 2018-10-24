import React, { Component } from 'react';
import './Map.css'

class Map extends Component {

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
      center: {lat: 51.110453, lng: 17.032753},
      zoom: 13
    })
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
