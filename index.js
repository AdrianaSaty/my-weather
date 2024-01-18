const weatherForm = document.getElementById("weatherForm");
const weatherDiv = document.getElementById("weather");

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = event.target[0].value;
    searchWeather(city);
})

async function searchWeather(city) {
    const appKey = 'cc15b86641ceefed4f4b037128019183';
    const lang = 'en';
    const units = 'metric';
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&lang=${lang}&units=${units}`);
    const weatherData = await weatherResponse.json();
    showWeather(weatherData);
}

function showWeather(weather) {
    const temperature = Math.r(weather.main.temp);
    const description = weather.weather[0].description;
    const city = weather.name;
    const iconCode = weather.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}.png`;

    weatherDiv.innerHTML = '';

    const cityH2 = document.createElement("h2");
    cityH2.textContent = city;

    const iconImage = document.createElement("img");
    iconImage.src = iconURL;
    iconImage.alt = description;

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = description;

    const temperatureParagraph = document.createElement("p");
    temperatureParagraph.textContent = `Temperature: ${temperature}°C`;

    weatherDiv.appendChild(cityH2);
    weatherDiv.appendChild(iconImage);
    weatherDiv.appendChild(descriptionParagraph);
    weatherDiv.appendChild(temperatureParagraph);
}