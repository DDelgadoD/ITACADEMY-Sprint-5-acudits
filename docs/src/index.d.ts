type JokeFather = {
    id: string;
    joke: string;
    status: Number;
};
type JokeChuck = {
    icon_url: string;
    id: string;
    url: string;
    value: string;
};
type Score = {
    joke: string;
    score: string;
    date: string;
};
type Scores = Array<Score>;
declare const urlFather = "https://icanhazdadjoke.com/";
declare const dataFather: {
    method: string;
    headers: {
        Accept: string;
    };
};
declare const urlChuck = "https://api.chucknorris.io/jokes/random";
declare const dataChuck: {
    method: string;
};
declare let allowVoting: boolean;
declare const reportAcudits: Scores;
declare const fetching: <T>(url: string, data?: RequestInit) => Promise<T>;
declare const getFather: () => Promise<void>;
declare const getChuck: () => Promise<void>;
declare const getJoke: () => void;
declare const permitReevaluation: (date: string) => void;
declare const evaluateJoke: (points: string, date?: string) => void;
