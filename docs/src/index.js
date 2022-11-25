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
const getJoke = () => {
    permitReevaluation('');
    const seed = Math.round(Math.random());
    seed ? getFather() : getChuck();
    if (allowVoting === false) {
        allowVoting = true;
        const vote = document.getElementById('voting');
        vote.classList.remove('d-none');
    }
};
const permitReevaluation = (date) => {
    const votingButton = Array.from(document.querySelectorAll('#voting .btn'));
    votingButton.map(e => date === ''
        ? (e.onclick = () => evaluateJoke(e.innerHTML))
        : (e.onclick = () => evaluateJoke(e.innerHTML, date)));
};
const evaluateJoke = (points, date = '') => {
    console.log(points);
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
            console.log('Changed ' + s.score);
        });
    }
    console.log(reportAcudits);
};
//# sourceMappingURL=index.js.map