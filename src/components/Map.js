import React, { Component } from 'react';
import List from './List.js';

class Map extends Component {

  state = {
    locations: [
    {
      title: 'Manufaktura (Łódź)',
      location: {lat: 51.779444, lng: 19.4475}
    },
    {
      title: 'Ulica Piotrkowska w Łodzi',
      location: {lat: 51.776111, lng: 19.454722}
    },
    {
      title: 'Łódzki Ogród Botaniczny',
      location: {lat: 51.756389, lng: 19.406667}
    },
    {
      title: 'Palmiarnia Łódzka',
      location: {lat: 51.760348, lng: 19.480125}
    },
    {
      title: 'Księży Młyn',
      location: {lat: 51.755833 , lng: 19.481944}
    },
  ],
    map: {},
    markers: [],
    infowindow: [],
    paragraphs: [],
    links: []
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

    // Create a new blank array for all the listing markers.
    let markers = []

    var infowindow = new window.google.maps.InfoWindow()

    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.759445, lng: 19.457216},
      zoom: 13
    })
    this.setState({map:map})

    let out = this

      // Looping through all of the locations
      this.state.locations.forEach((loc) => {
        // Gathering position and title from the array
        var position = loc.location
        var title = loc.title

        // Creating a marker per location
        var marker = new window.google.maps.Marker({
          map: map,
          position: position,
          title: title,
          animation: window.google.maps.Animation.DROP,
        })

        // Pushing markers to the created array
        markers.push(marker)

       // Creating an event listener opening infowindow at each marker
        marker.addListener('click', function() {
          // Checking if there is a infowindow and close it before making new one
          if (infowindow) {
            infowindow.close()
            // Fetching data from Wikipedia to the infowindow
            out.fetchWiki(marker, infowindow, map)
          }
        })
      })
      // Passing markers to state
      this.setState({
          markers,
          infowindow
      })
  }

  // Wikipedia fetching method
  fetchWiki = (marker, infowindow, map) => {
    var out = this
    let paragraphs, links
    paragraphs = []
    links = []
    // Replacing spaces to the '_'
    let search = marker.title.replace(/\s+/g, '_')
    let url = 'https://pl.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&exintro&titles=' + search + '&format=json&utf8'
    fetch(url).then(function(response) {
      if (response.ok) {
        return response.json()
      } else {
          throw new Error ('Response error: ' + response.statusText)
      }
    }).then(function(data) {
        let page = data.query.pages
        // Page unique number
        let pageId = Object.keys(data.query.pages)[0]
        // Getting the content from the page
        let content = page[pageId].extract
        // Getting first paragraph of the wikipedia
        let firstParagraph = content.slice(0, content.indexOf('</p>') + '</p>'.length)
        // Create page link to the Wikipedia website
        let pageLink = `<a href="https://pl.wikipedia.org/wiki/${search}">Click here for more informations</a>`
        // Pushing data to the arrays
        paragraphs.push(firstParagraph)
        links.push(pageLink)
        // Invoking infowindow method
        out.infoWindowData(marker, infowindow, map, paragraphs, links)
    }).catch(function(error) {
        alert('Retriving data failed: ' + error.statusText)
    })
    this.setState({paragraphs:paragraphs})
    this.setState({links:links})
  }

  // Creating a method providing data for the infowindow
  infoWindowData = (marker, infowindow, map, paragraphs, links) => {

    // Adding animated marker after click, which stops shortly after
    marker.setAnimation(window.google.maps.Animation.BOUNCE)
      setTimeout(function () {
        marker.setAnimation(null)
      }, 750)

    infowindow.marker = marker;
    infowindow.setContent('<div>' + marker.title + paragraphs + links +
      `<p><i> Informations provided by Wikipedia </i></p>`+
        '</div>');
    infowindow.open(map, marker);
    // Making sure the marker property is cleared if the infowindow is closed
    infowindow.addListener('closeclick', function() {
      infowindow.setMarker = null;
     });
  }

  render() {
    return (
      <div>
        <div id='map' aria-label='Favourite Locations Map by Google'> </div>
        <List
          markers={this.state.markers}
          map={this.state.map}
          infowindow={this.state.infowindow}
          fetchWiki={this.fetchWiki}
        />
      </div>
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
    script.onerror = function() {
      alert('Google Maps not found')
    }
    index.parentNode.insertBefore(script, index)
  }


export default Map;
