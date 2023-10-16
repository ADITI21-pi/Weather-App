const apiKey = "12c4c428129d6adfeea11f4b373c808b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
           var data = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

/*  if(data.weather[0].main == "clouds") {
    weatherIcon.src = "img/clouds.png";
}
else if(data.weather[0].main == "humidity") {
    weatherIcon.src = "img/humidity.png";
}
else if(data.weather[0].main == "clear") {
    weatherIcon.src = "img/clear.png";
}
else if(data.weather[0].main == "rain") {
    weatherIcon.src = "img/rain.png";
}
else if(data.weather[0].main == "drizzle") {
    weatherIcon.src = "img/drizzle.png";
}
else if(data.weather[0].main == "mist") {
    weatherIcon.src = "img/mist.png";
}  */

       document.querySelector(".weather").style.display = "block";
       document.querySelector(".error").style.display = "none";    
    }

}

searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
    searchBox.value = "";
})