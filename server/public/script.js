console.log('Executing client side javascript...');


//Fetch API to retrieve Data
const fetchTemperature = () => { //something wrong with this syntax...
  fetch('/temperature')
  .then(results =>
    {
      return results.json();
    })
    .then(data => {
      const temperaturedisplay = document.getElementById('temperature-display');
      temperaturedisplay.innerHTML =  data.value ;
    });
};

const fetchHumidity = () =>
{
  fetch('/humidity')
  .then(results =>
    {
      return results.json();
    })
    .then(data => {
        const humiditydisplay = document.getElementById('humidity-display');
        humiditydisplay.innerHTML = data.value;
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
      backgroundColor: 'rgba(66,110,202,0.5)',
      fill: true
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
      pointRadius: 5,
      pointBackgroundColor: 'rgba(60,132,167,1)'
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
        maintainAspectRatio: false,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(60,132,167,1)'
      }
    });


setInterval(() => {
  fetchTemperature()
  fetchHumidity()
},2000);
