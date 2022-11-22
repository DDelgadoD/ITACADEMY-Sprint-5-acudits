// Getter with fecth
const urlJoke = 'https://icanhazdadjoke.com/';
const dataJoke = {
  method: 'GET',
  headers: {
    // eslint-disable-next-line prettier/prettier
    'Accept': 'application/json',
  },
};

type Joke = {
  id: string;
  joke: string;
  status: Number;
};

async function fetching<T>(url: string, data: RequestInit = {}): Promise<T> {
  return await fetch(url, data)
    .then(response => response.json())
    .then(data => data as T);
}

async function getJoke() {
  const joke = (await fetching(urlJoke, dataJoke)) as Joke;
  const jokeDiv = <HTMLDivElement>document.getElementById('joke');
  jokeDiv.innerHTML = joke.joke;
}
