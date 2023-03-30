import axios from "axios";

// const axios = require("axios");

const footballApi = axios.create({
  baseURL: 'https://free-football-soccer-videos.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '8e1151854emshffd5791405e3100p1a4c87jsn0c9e533a939c',
    'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
  }
});

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export default footballApi;