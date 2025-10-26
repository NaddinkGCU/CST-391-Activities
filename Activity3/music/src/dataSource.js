import axios from "axios";

export default axios.create({
    baseURL: 'https://cst391-music-app-six.vercel.app/api'
});