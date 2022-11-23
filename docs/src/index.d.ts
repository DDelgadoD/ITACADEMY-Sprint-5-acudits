declare const urlJoke = "https://icanhazdadjoke.com/";
declare const dataJoke: {
    method: string;
    headers: {
        Accept: string;
    };
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
declare const reportAcudits: scores;
declare function fetching<T>(url: string, data?: RequestInit): Promise<T>;
declare function getJoke(): Promise<void>;
declare function evaluateJoke(score: Number): void;
