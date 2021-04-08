//Day & Time
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Staurday",
  ];
  let day = days[dayIndex];

  return `${day} | ${hours}:${minutes}`;
}

//Weather & Location
function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let weatherDescription = response.data.weather[0].description;
  iconElement.setAttribute("src", getIcon(weatherDescription));
}

function searchCity(city) {
  let apiKey = "98b5711bc7358d439ba8e0b45dbf74b0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "98b5711bc7358d439ba8e0b45dbf74b0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchBar = document.querySelector("#city-input");
searchBar.addEventListener("submit", handleSubmit);

let searchButton = document.querySelector("#btn");
searchButton.addEventListener("click", handleSubmit);

let currentLocationButton = document.querySelector("#arrow-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Atlanta");
displayForecast();

//5-Day Forecast
function displayForecast() {
  let forecastElement = document.querySelector("#weather-forecast");

  forecastElement.innerHTML = `<div class="card-group">
          <div class="card">
            <img src="http://openweathermap.org/img/wn/03d@2x.png" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">Wednesday</h5>
                <ul id="weather-display">
                      <li>75˚ F | C</li>
                      <li>Humidity: 35%</li>
                      <li>Precipitation: 25%</li>
                      <li>Description: Clear</li>
                  </ul>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="http://openweathermap.org/img/wn/03d@2x.png" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">Thursday</h5>
                <ul id="weather-display">
                      <li>75˚ F | C</li>
                      <li>Humidity: 35%</li>
                      <li>Precipitation: 25%</li>
                      <li>Description: Clear</li>
                  </ul>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="http://openweathermap.org/img/wn/09d@2x.png" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">Friday</h5>
                <ul id="weather-display">
                      <li>75˚ F | C</li>
                      <li>Humidity: 35%</li>
                      <li>Precipitation: 25%</li>
                      <li>Description: Clear</li>
                  </ul>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="http://openweathermap.org/img/wn/02d@2x.png" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">Saturday</h5>
                <ul id="weather-display">
                      <li>75˚ F | C</li>
                      <li>Humidity: 35%</li>
                      <li>Precipitation: 25%</li>
                      <li>Description: Clear</li>
                  </ul>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="http://openweathermap.org/img/wn/11d@2x.png" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">Sunday</h5>
                <ul id="weather-display">
                      <li>75˚ F | C</li>
                      <li>Humidity: 35%</li>
                      <li>Precipitation: 25%</li>
                      <li>Description: Clear</li>
                  </ul>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>`;
}
