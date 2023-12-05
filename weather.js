const apiKey = "12eab48df8c39926619de489d18d48d0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=12eab48df8c39926619de489d18d48d0&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid = ${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {


        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "/HTML/images/cloudy.jpg";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "/HTML/images/clear.jpg";

        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "/HTML/images/rainy.jpg";

        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/HTML/images/drizzle.jpg";

        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "/HTML/images/mist.jpg";

        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "/HTML/images/snow.jpg";

        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
