import axios from "axios";

// base URl to make requests to the movue DB
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;