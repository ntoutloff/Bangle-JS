let url = "https://api.weather.gov/points/30.0697,-94.1957";

Bangle.on('touch', function() {
  Bangle.http(url, {
    method: 'GET',
    headers: {
      'User-Agent': 'me',
      //'Accept-Encoding': 'gzip, deflate',
      //'Connection': 'keep-alive',
      //"Accept-Charset": "utf-8",
      "Accept": "application/json"
    }
  }).then(data=>{
    g.clear();
    g.drawString(data.resp, 0, 0);
    print(data.resp);
  });
});