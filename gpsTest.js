function getFix() {
  Bangle.getGPSFix();
  Bangle.on('GPS', print);
  setTimeout(getFix, 1000);
}




Bangle.setGPSPower(1, "app");
Bangle.on('GPS', function(fix) {
  print(fix.lat);
  if (fix.lat) {Bangle.removerListener('GPS');}
});