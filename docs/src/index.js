"use strict";
const urlJoke = 'https://icanhazdadjoke.com/';
const dataJoke = {
    method: 'GET',
    headers: {
        // eslint-disable-next-line prettier/prettier
        'Accept': 'application/json',
    },
};
const reportAcudits = [];
async function fetching(url, data = {}) {
    return await fetch(url, data)
        .then(response => response.json())
        .then(data => data);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getJoke() {
    const joke = await fetching(urlJoke, dataJoke);
    const jokeDiv = document.getElementById('joke');
    jokeDiv.innerHTML = joke.joke;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function evaluateJoke(score) {
    const jokeDiv = document.getElementById('joke');
    if (jokeDiv.innerHTML === '') {
        console.log('No Joke');
    }
    else {
        const sc = {
            joke: jokeDiv.innerHTML,
            score: score,
            date: new Date().toISOString(),
        };
        reportAcudits.push(sc);
        console.log(reportAcudits);
    }
}
//# sourceMappingURL=index.js.map