
const loadWeather = (city) => {
    const inputLocation = document.getElementById('input-location');
    const key = 'f8fc317182d9227318a8c28dab96f1dd';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputLocation.value}&appid=${key}`)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

const displayWeather = weather => {
    console.log(weather);
    const weatherDiv = document.getElementById('weather-info');
    // console.log(weather.main.temp);
    const div = document.createElement('div');
    div.innerHTML = `
            <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1>${weather.name}</h1>
            <h3><span>${weather.main.temp}</span>&deg;C</h3>
            <h1 class="lead">${weather.clouds.all}%</h1>
        `

    weatherDiv.appendChild(div);

}





// bdjobs.com seep circular,  social and economic enhancement programe. field credit officer









