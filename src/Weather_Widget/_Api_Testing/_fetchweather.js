import axios from "axios";
const API_KEY='8e9305559a7e405eac02592862afe99b';
const WEATHER_ENDPOINT = 'https://api.weatherbit.io/v2.0/current?city=Kolkata&country=India&key='+API_KEY;


const fetchData = () => {
  console.log('Fetching data...');
  return axios
    .get(WEATHER_ENDPOINT)
    .then(response => {
      return response.data;
    });
};

exports.fetchData = fetchData;