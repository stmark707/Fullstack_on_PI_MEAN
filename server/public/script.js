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

const temperaturegetChart = document.getElementById('temperature_chart').getContext('2d');
const humiditygetchart = document.getElementById('humidity_chart').getContext('2d');

const newtemperatureChart = new Chart(temperaturegetChart,
  {
    type: 'line';
    data:
    {
        labels: ['10:00', '10:10' , '10:20', '10:30'],
        datasets: [{
          data: [12, 15, 25, 30],
          backgroundColor: 'rgba(66,110,202,0.5)'
        }]
    },
    options:
    {
      legend:
      {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });


setInterval(() => {
  fetchTemperature()
  fetchHumidity()
},2000);
