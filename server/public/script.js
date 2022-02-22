console.log('Executing client side javascript...');


//Fetch API to retrieve Data
const fetchTemperature = () => { //something wrong with this syntax...
  fetch('/temperature')
  .then(results =>
    {
      return results.text();
    })
    .then(text => {
      const temperaturedisplay = document.getElementById('temperature-display');
      temperaturedisplay.innerHTML = text;
    });
};

const fetchHumidity = () =>
{
  fetch('/humidity')
  .then(results =>
    {
      return results.text();
    })
    .then(text => {
        const humiditydisplay = document.getElementById('humidity-display');
        humiditydisplay.innerHTML = text;
  });
};

setInterval(() => {
  fetchTemperature()
  fetchHumidity()
},2000);
