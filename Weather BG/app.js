//api.openweathermap.org / data / 2.5 / weather ? q =Paris & appid={c768093af914fa48e938b692e65d6d59 }

const weatherApi = {
  key: "9c590125ae8050eadad9d4e4ce075a41",
  baseUrl: "https://api.openweathermap.org / data / 2.5 / weather ?",
};

//? Add event listener on keypress
const searchInputBox = document.getElementById("inputBox");

searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
  }
});

//? Get weather report

function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport)
    .catch(function () {});
}

// function getWeatherReport(city) {
//   let key = "{c768093af914fa48e938b692e65d6d59}";
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?id=" +
//       city +
//       "&appid=" +
//       key
//   )
//     .then(function (resp) {
//       return resp.json();
//     }) // Convert data to json
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function () {
//       // catch any errors
//     });
// }

//? Show weather report
function showWeatherReport(weather) {
  console.log(weather);
}
//?Date manage
