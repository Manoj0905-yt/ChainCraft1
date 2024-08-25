const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');

function updateData() {
    fetch('/getData')
        .then(response => response.json())
        .then(data => {
            temperatureElement.innerText = data.temperature;
            humidityElement.innerText = data.humidity;
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Update data every 5 seconds
setInterval(updateData, 500);

