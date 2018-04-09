const request = require('request');

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/a581d0776300fd056a72643cd12fdab6/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to forecast.io server');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};


module.exports.getWeather = getWeather;
