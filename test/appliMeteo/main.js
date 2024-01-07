require('dotenv').config();
const axios = require('axios');

let city = {
  insee: '35238',
  cp: 35000,
  latitude: 48.112,
  longitude: -1.6819,
  altitude: 38,
  name: 'Rennes',
};

const url = 'https://api.meteo-concept.com/api/location/';
const endPoint = city;
const token =
  '3401835e8935f982cc227e207f8bf7ab1016c19ac202fedb04d73bdc621f8184';

let getTest = () => {};

const maPromesse = new Promise((resolve, reject) => {
  console.log('url = ', url + endPoint + token);
  axios
    .get(url + endPoint + token)
    .then((response) => {
      console.log(response.data);
      resolve();
    })
    .catch((error) => {
      console.log(error);
      reject();
    });
});

getTest();
