document.addEventListener('DOMContentLoaded', function () {
    const apikey = "ed3db5881dae3f51cea31f82077ac48e";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    async function checkweather(city) {
        const response = await fetch(apiUrl + city + '&appid=${apikey}');
        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else {
            var data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";
            if (Math.round(data.main.temp) > 30 && data.weather[0].main == "Clear") {
                document.getElementById("s").innerHTML = "Pretty warm and sunny outside do carry your Sunscreen and glasses";
            }
            if (Math.round(data.main.temp) < 30 && data.weather[0].main == "Clear") {
                document.getElementById("s").innerHTML = "Moderate Temperature and sunny outside Enjoy your Day";
            }
            if (Math.round(data.main.temp) < 25 && data.weather[0].main == "Clouds") {
                document.getElementById("s").innerHTML = "Cool and Cloudy day on cards do carry your umbrella!";
            }
            if (Math.round(data.main.temp) > 25 && data.weather[0].main == "Clouds") {
                document.getElementById("s").innerHTML = "Humid and a Cloudy day on cards Hope your Ac's is working fine!";
            }
            if (Math.round(data.main.temp) < 20 && data.weather[0].main == "Clouds") {
                document.getElementById("s").innerHTML = "Cool and Cloudy Outside Have a good day!";
            }
            if (Math.round(data.main.temp) < 10) {
                document.getElementById("s").innerHTML = "Chilly weather , Pull up your jackets and scarfs Enjoy your coffee!";
            }
            if (data.weather[0].main == "Rain") {
                document.getElementById("s").innerHTML = "Carry your umbrealla folsk its going to pour ";
            }
            if (Math.round(data.main.temp) < 25 && data.weather[0].main == "Clear") {
                document.getElementById("s").innerHTML = "Pleasant day with good sunshine perfect day for outing ";
            }
            if (data.weather[0].main == "Drizzle") {
                document.getElementById("s").innerHTML = "Slight DRizzle Expected along the day Good to have a umbrella with you";
            }
            if (data.weather[0].main == "Mist") {
                document.getElementById("s").innerHTML = "Fog and Mist all around , Poor Visibility , Good Luck for driving";
            }

            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "clouds.png";
            }
            if (data.weather[0].main == "Clear") {
                weatherIcon.src = "clear.png";
            }
            if (data.weather[0].main == "Rain") {
                weatherIcon.src = "rain.png";
            }
            if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "drizzle.png";
            }
            else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "mist.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    }
    searchBtn.addEventListener("click", () => {
        checkweather(searchBox.value);
    });

});
