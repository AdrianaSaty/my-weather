

async function searchWeather() {
    await fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=cc15b86641ceefed4f4b037128019183')
}

searchWeather()