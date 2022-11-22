"use strict";
// Getter with fecth
const urlJoke = 'https://icanhazdadjoke.com/';
const dataJoke = {
    method: 'GET',
    headers: {
        // eslint-disable-next-line prettier/prettier
        'Accept': 'application/json',
    },
};
async function fetching(url, data = {}) {
    return await fetch(url, data)
        .then(response => response.json())
        .then(data => data);
}
async function getJoke() {
    const joke = (await fetching(urlJoke, dataJoke));
    const jokeDiv = document.getElementById('joke');
    jokeDiv.innerHTML = joke.joke;
}
//# sourceMappingURL=index.js.map