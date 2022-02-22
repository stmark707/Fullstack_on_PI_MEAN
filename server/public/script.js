console.log('Executing client side javascript...');


//Fetch API to retrieve Data

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
