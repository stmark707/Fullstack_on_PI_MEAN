console.log('Executing client side javascript...');


//Fetch API to retrieve Data
const fetchTemperature = () => {
  fetch('/temperature')
  .then(results =>
    {
      return results.text();
    });

    then(text =>
    {
      const temperatureDisplay = document.getElementById('temperature-diplay');
      temperatureDisplay.innerHTML = text;
    });
}

const fetchHumidity = () =>
{
  fetch('/humidity')
  .then(results =>
    {
      return results.text();
    });

    then(text =>
      {
        const temperatureDisplay = document.getElementById('humidity-diplay');
        temperatureDisplay.innerHTML = text;
  });
}

setInterval(() => {
  fetchTemperature()
  fetchHumidity()
},2000)
