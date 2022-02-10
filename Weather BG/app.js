//api.openweathermap.org /data/2.5/weather ? q =Paris & appid={c768093af914fa48e938b692e65d6d59 }

const weatherApi = {
  key: "9c590125ae8050eadad9d4e4ce075a41",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather?q=",
};

//? Add event listener on keypress
const searchInputBox = document.getElementById("inputBox");

searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather-body").style.display = "block";
  }
});

//? Get weather report

function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
  //.catch(function () {});
}

//? Show weather report
function showWeatherReport(weather) {
  console.log(weather);
  let city = document.getElementById("city");
  city.innerText = `${weather.name},${weather.sys.country}`;

  let temp = document.getElementById("temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let minMaxTemp = document.getElementById("min-max");
  minMaxTemp.innerHTML = `${Math.floor(
    weather.main.temp_min
  )}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

  let weatherType = document.getElementById("weather");
  weatherType.innerText = `${weather.weather[0].main}`;

  let date = document.getElementById("date");
  let todayDate = new Date();
  //console.log(today);
  date.innerText = dateManage(todayDate);

  if (weatherType.textContent == "Clear") {
    document.body.style.backgroundImage = "url(Images/clearsky.jpg)";
  } else if (weatherType.textContent == "Clouds") {
    document.body.style.backgroundImage = "url(Images/Cloudy.jpg)";
  } else if (weatherType.textContent == "Snow") {
    document.body.style.backgroundImage = "url(Images/snow.jpg)";
  } else if (weatherType.textContent == "Rain") {
    document.body.style.backgroundImage = "url(Images/rainy.jpg)";
  } else if (weatherType.textContent == "Thunderstorm") {
    document.body.style.backgroundImage = "url(Images/thunderstorm.jpg)";
  } else if (weatherType.textContent == "Haze") {
    document.body.style.backgroundImage = "url(Images/cloud.jpg)";
  } else if (weatherType.textContent == "Mist") {
    document.body.style.backgroundImage = "url(Images/mist.jpg)";
  }
}
//?Date manage
function dateManage(dateArg) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];

  return `${date} ${month} (${day},${year})`;
}
