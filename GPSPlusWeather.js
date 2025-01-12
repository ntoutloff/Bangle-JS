let lat;
let lon;


function getWeather(lat, lon) {
  let forecastEndpoint;
  let url = 'https://api.weather.gov/points/' + lat + ',' + lon;
  print(url);
  
  // This one uses lat and lon to get forecast endpoint
  Bangle.http(url, {
    method: 'GET',
    headers: {
      'User-Agent': 'me',
      "Accept": "application/json"
    }
  }).then(data => {
    let myData = JSON.parse(data.resp);
    let cityState = myData.properties.relativeLocation.properties.city +
      myData.properties.relativeLocation.properties.state;
    print(cityState);
    
    g.clear();
    g.setFont6x15();
    g.drawString(cityState, 10, 0 );
    
    forecastEndpoint = myData.properties.forecast;
    print(forecastEndpoint);
  
  
    // This one returns the actual forecast
    Bangle.http(forecastEndpoint, {
      method: 'GET',
      headers: {
        'User-Agent': 'me',
        "Accept": "application/json"
      }
    }).then(data => {
      myData = JSON.parse(data.resp);
      let now = myData.properties.periods[0].name + ': ' +
          myData.properties.periods[0].detailedForecast;
      let later = myData.properties.periods[1].name + ': ' +
          myData.properties.periods[1].detailedForecast;

      print(now);
      print(later);
      
      
      g.drawString(now, 10, 18);
      g.drawString(later, 10, 36);
    });
  });
}

function getCoords() {
  Bangle.setGPSPower(1, 'app');

  Bangle.on('GPS', fix => {
    print(fix);
    if (fix.fix == 1) {
      lat  = fix.lat;
      lon = fix.lon;
      Bangle.setGPSPower(0, 'app');
      getWeather(lat, lon);
    }
  });

}

//getCoords();
getWeather(30.069665, -94.195645);