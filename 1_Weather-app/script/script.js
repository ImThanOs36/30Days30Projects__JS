const URL = `https://api.openweathermap.org/data/2.5/weather?q=`;
const apiKey = "28ae0a8507ba9b8cf20ace9fc79e9d79";
let weatherIcon = document.querySelector(".weather_icon");
let errorMessage = document.querySelector(".error_message");

async function checkWeather(city) {
  let response = await fetch(URL + city + `&appid=${apiKey}` + "&units=metric");
  let data = await response.json();
  if (response.status == 404 || response.status == 400) {
    errorMessage.style.visibility = "visible";
  } else {
    errorMessage.style.visibility = "hidden";
  }
  console.log(data);
  document.querySelector(".city_temp").innerHTML =
    Math.floor(data.main.temp) + "°C";
  document.querySelector(".city_name").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "/kph";
  let weather = data.weather[0].main;
  if (weather == "Smoke") {
    weatherIcon.src = "images/drizzle.png";
  } else if (weather == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (weather == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (weather == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (weather == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (weather == "Snow") {
    weatherIcon.src = "images/snow.png";
  } else {
    weatherIcon.src = "images/mist.png";
  }
  document.querySelector(".weather").style.display = "block";
}

function getData() {
  let value = document.querySelector(".city_input").value;
  checkWeather(value);
}

var input = document.querySelector(".city_input");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getData(); // Call getData function when Enter key is pressed
  }
});
