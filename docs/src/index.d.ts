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
declare function fetching<T>(url: string, data?: RequestInit): Promise<T>;
declare function getJoke(): Promise<void>;
