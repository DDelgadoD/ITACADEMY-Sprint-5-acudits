"use strict";
const urlFather = 'https://icanhazdadjoke.com/';
const dataFather = {
    method: 'GET',
    headers: {
        // eslint-disable-next-line prettier/prettier
        Accept: 'application/json',
    },
};
const urlChuck = 'https://api.chucknorris.io/jokes/random';
const dataChuck = {
    method: 'GET',
};
const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=41.390205&lon=2.154007&appid=e1cfeb1205be92eb55ed83ac48a3a40c&units=metric';
const dataWeather = {
    method: 'GET',
};
let allowVoting = false;
const reportAcudits = [];
const fetching = async (url, data = {}) => {
    return await fetch(url, data)
        .then(response => response.json())
        .then(data => data);
};
const getFather = async () => {
    const joke = await fetching(urlFather, dataFather);
    const jokeDiv = document.getElementById('joke');
    jokeDiv.innerHTML = joke.joke;
};
const getChuck = async () => {
    const joke = await fetching(urlChuck, dataChuck);
    const jokeDiv = document.getElementById('joke');
    jokeDiv.innerHTML = joke.value;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getWeather = async () => {
    const weather = await fetching(urlWeather, dataWeather);
    console.log(weather);
    const weatherDiv = document.getElementById('weather');
    const weatherIconDiv = (document.getElementById('weather-icon'));
    weatherDiv.innerHTML = `${weather.main.temp} ºC`;
    weatherIconDiv.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" width="50px" alt="Sol y nubes" />`;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getJoke = () => {
    permitReevaluation('');
    const seed = Math.round(Math.random());
    configureBlobs();
    seed ? getFather() : getChuck();
    if (allowVoting === false) {
        allowVoting = true;
        const vote = document.getElementById('voting');
        vote.classList.remove('d-none');
    }
};
const permitReevaluation = (date) => {
    const votingButton = Array.from(document.querySelectorAll('#voting img'));
    votingButton.map((e, index) => {
        date === ''
            ? (e.onclick = () => evaluateJoke(String(index + 1)))
            : (e.onclick = () => evaluateJoke(String(index + 1), date));
    });
};
const evaluateJoke = (points, date = '') => {
    if (date === '') {
        const jokeDiv = document.getElementById('joke');
        const sc = {
            joke: jokeDiv.innerHTML,
            score: points,
            date: new Date().toISOString(),
        };
        permitReevaluation(sc.date);
        reportAcudits.push(sc);
    }
    else {
        reportAcudits.filter(s => {
            if (s.date === date)
                s.score = points;
            console.log(`Changed: new score is ${s.score}`);
        });
    }
    console.log(reportAcudits);
};
const configureBlobs = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    const arr = ['.blob', '.mini-blob', '.mini-blob2'];
    arr.map(val => {
        const a = `url(./img/blob${Math.round(Math.random() * 10)}.svg)`;
        const div = document.querySelector(val);
        div.style.maskImage = a;
        div.style.webkitMaskImage = a;
        div.style.backgroundColor = `#${color}`;
    });
};
window.addEventListener('load', async () => {
    console.log('load');
    await getWeather();
    const getJokeDiv = document.getElementById('get-joke');
    getJokeDiv.onclick = () => getJoke();
});
//# sourceMappingURL=index.js.map