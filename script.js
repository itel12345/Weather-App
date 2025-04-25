
const apikey = "6f9ab9dc0411b524e165c6b6ec121bb9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";



    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear-sky_7865926.png";
    }
    else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./images/cloud-12345.png";
    }
     else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rainy_792507.png";
    }
     else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle_13882657.png";
    }
     else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mist_13882643.png";
    }
   



}



searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});


