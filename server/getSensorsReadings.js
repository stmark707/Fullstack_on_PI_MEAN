const sensor = require('node-dht-sensor');

/*
Abstracting the functionality away from the index.js to the sensorreading.js.
*/

const getSensorReadings = (callback) => {
  sensor.read(22, 4, function(err, temperature, humidity)
  {
    if (err) //exception handling in the case of the error
    {
      return callback(err);
    }

    callback(null, temperature, humidity);
  });
});

module.exports = getSensorReadings;
