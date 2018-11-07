# Neighborhood Map Project

Project for the [Front-End Web Developer Nanodegree with Udacity](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001)

## Project Goal

The project goal was to create a single-page application using [React](https://reactjs.org/).

[Google Maps](https://cloud.google.com/maps-platform/maps/) was responsible for providing a map and locations and [Media Wiki API](https://www.mediawiki.org/wiki/API:Main_page) - the [Wikipedia](https://www.wikipedia.org/) API, which provides useful information about specific location.

- The application shows the best places to visit in Łódź (Poland).
- Clicking on the Google Marker will provide more interesting information about the place.
- You can also filter the locations by name using the search input.
- There is a clear button, which reset the filtering options.

### Launching the application
1. Install [Node.js](https://nodejs.org/en/)
2. Change directory to the project location
3. Install npm by typing:
    - npm install
4. Run 'npm start' to launch localhost

### Launching the application in production mode
1. Open [Node.js](https://nodejs.org/en/)
2. Change directory to the project location
3. Build your production server by:
    - create production build (**yarn build**),
    - serve the data with static server: (**yarn global and serve**) and then type (**serve -s build**),
    - visit the local production server
