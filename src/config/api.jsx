export default class APIConfig {
    static get baseUrl() { return "https://limitless-ravine-1959.herokuapp.com/"; }
    static get(route) { return new URL(`${APIConfig.baseUrl}${route}`); }
};