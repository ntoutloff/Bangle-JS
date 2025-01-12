Bangle.setGPSPower(1, 'app');

function getWeather();

function endGPS() {
  Bangle.setGPSPower(0, 'app');
  print('GPS turned off');
  Bangle.removeListener('GPS', listenForGPS);
}
let timer = setTimeout(endGPS, 120000);

function listenForGPS(fix) {
  if (fix.fix == 1) {
    endGPS();
    clearTimeout(timer);
    print('got it', fix);
    getWeather(fix);
  }
}

Bangle.on('GPS', listenForGPS);

