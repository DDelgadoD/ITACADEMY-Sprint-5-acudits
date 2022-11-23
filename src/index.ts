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

type score = {
  joke: string;
  score: Number;
  date: string;
};

type scores = Array<score>;

const reportAcudits: scores = [];

async function fetching<T>(url: string, data: RequestInit = {}): Promise<T> {
  return await fetch(url, data)
    .then(response => response.json())
    .then(data => data as T);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getJoke(): Promise<void> {
  const joke: Joke = await fetching(urlJoke, dataJoke);
  const jokeDiv = <HTMLDivElement>document.getElementById('joke');
  jokeDiv.innerHTML = joke.joke;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function evaluateJoke(score: Number): void {
  const jokeDiv = <HTMLDivElement>document.getElementById('joke');
  if (jokeDiv.innerHTML === '') {
    console.log('No Joke');
  } else {
    const sc: score = {
      joke: jokeDiv.innerHTML,
      score: score,
      date: new Date().toISOString(),
    };
    reportAcudits.push(sc);
    console.log(reportAcudits);
  }
}
