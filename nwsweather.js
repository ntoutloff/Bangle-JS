const Layout = require('Layout');
require("Font8x12").add(Graphics);
const layout = new Layout(
  {
    type: "txt",
    font: "8x12",
    label: "Weather goes here",
    wrap: 1,
    width: 128,
    height: 128,
    fillx: 1,
    filly: 1
  }
);
let lat = 30.069665;
let lon = -94.195645;
let city;
let state;
let thisTime;
let nextTime;
let thisForecast;
let nextForecast;

function getEndpoint(lat, lon) {
  let url = 'https://api.weather.gov/points/' + lat + ',' + lon;
  Bangle.http(url, {
    method: 'GET',
    headers: {
      'User-Agent': 'me',
      "Accept": 'application/json'
    }
  }).then(data => {
    const response = JSON.parse(data.resp);
    city = response.properties.relativeLocation.properties.city;
    state = response.properties.relativeLocation.properties.state;
    const endpoint = response.properties.forecast;
    //print(city, state);
    //print(endpoint);
    getForecast(endpoint);
  });
}

function getForecast(endpoint) {
  Bangle.http(endpoint, {
    method: 'GET',
    headers: {
      'User-Agent': 'me',
      'Accept': 'application/json'
    }
  }).then(data => {
    const response = JSON.parse(data.resp);
    thisTime = response.properties.periods[0].name;
    nextTime = response.properties.periods[1].name;
    thisForecast = response.properties.periods[0].detailedForecast;
    nextForecast = response.properties.periods[1].detailedForecast;
    //print(response);
    displayForecast();
  });
}

function displayForecast() {
  layout.l.label = `${city} ${state}
    ${thisTime}: ${thisForecast}\n
    ${nextTime}: ${nextForecast}`;
  g.clear();
  layout.render();
}


getEndpoint(lat, lon);