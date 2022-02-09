const sensor = require('node-dht-sensor');
//import the sensor library

/*the first argument is the sensor number, we are DHT22 sensor
the second argument is the pin number we will read from*/
sensor.read(22, 4, function(err, temperature, humidity)
{
  if (!err)
  {
    console.log('temp: ' + temperature.toFixed(1) + '℃, ' + 'humidity: ' +
    + humidity.toFixed(1) + '%')
  }
});
