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
const humiditygetChart = document.getElementById('humidity_chart').getContext('2d');
const temperature_data = {
    labels: ['10:00', '10:10' , '10:20', '10:30'],
    datasets: [{
      data: [12, 15, 25, 30],
      backgroundColor: 'rgba(66,110,202,0.5)',
      fill: true
    }]
};
const humidity_data = {
    labels: ['10:00', '10:10' , '10:20', '10:30'],
    datasets: [{
      data: [12, 15, 25, 30],
      backgroundColor: 'rgba(66,110,202,0.5)'
    }]
};
const newtemperatureChart = new Chart(temperaturegetChart,
  {
    type: 'line',
    data: temperature_data,
    options:
    {
      legend:
      {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false,
      pointRadius: 3
    }
  });
  const newhumidityChart = new Chart(humiditygetChart,
    {
      type: 'line',
      data: humidity_data,
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
