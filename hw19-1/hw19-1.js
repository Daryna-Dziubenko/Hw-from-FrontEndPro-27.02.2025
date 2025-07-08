/*За допомогою запиту вивести виджет погоди. Ресурс API https://openweathermap.org/current
Також потрібно додати кнопку оновлення данних.*/


async function getWeather() {
  const apiKey = '15ff8d2a460bdb0974999a907d1792b7';
  const lat = 49.26;
  const lon = 23.85;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }
    const data = await response.json();

    document.getElementById('city').textContent = `Weather in: ${data.name}`;
    document.getElementById('temp').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('desc').textContent = `Description: ${data.weather[0].description}`;
    document.getElementById('hum').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('pressure').textContent = `Pressure: ${data.main.pressure}hPa`;
    document.getElementById('speed').textContent = `Wind: ${data.wind.speed}km/h`;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById('icon').src = iconUrl;
  } catch (error) {
    console.error('Loading error:', error.message);
    alert('Weather data could not be downloaded.');
  }
}
window.onload = () => {
  getWeather();

  document.getElementById('updateBtn').addEventListener('click', () => {
    getWeather();
  });
};