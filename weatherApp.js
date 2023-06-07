<script>
let now = new Date();
let dayTimeDisplay = document.querySelector("h4");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) hours = `0${hours}`;

let minutes = now.getMinutes();
if (minutes < 10) minutes = `0${minutes}`;

let dateTime = document.getElementById("todaysDate");
dateTime.innerHTML = day + " " + hours + ":" + minutes;

function search(event) {
  event.preventDefault();
  /* let cityElement = document.querySelector("#city");
     cityElement.innerHTML = cityInput.value; */
  // Make an API call to OpenWeather API
  // Once I get the HTTP response, we display the city name and the temperature
  let apiKey = "a205604123833f7c8576397d580a2bf4";
  let city = "Paris";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  console.log(axios);
  axios.get(apiUrl).then(displayWeatherCondition);
}
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

    </script>
