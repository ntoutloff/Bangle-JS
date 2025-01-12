Bangle.on('touch', function() {
  g.clear();
  g.drawString("Hello" , 10, 10);
  Bangle.http("https://api.weather.gov/points/30.0697,-94.1957").then(data=>{
    g.drawString("There" , 20, 20);
    g.drawString(data.resp, 10, 10);
  });
});