const axios = require('axios');

function maPromesse1() {
  return new Promise((resolve, reject) => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((response) => {
        //console.log(response.data);
        console.log('ma Promesse 1');
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

function maPromesse2() {
  return new Promise((resolve, reject) => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((response) => {
        // console.log(response.data);
        console.log('ma Promesse 2');
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

function maPromesse3() {
  return new Promise((resolve, reject) => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((response) => {
        // console.log(response.data);
        console.log('ma Promesse 3');
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

async function test() {
  try {
    //
    await maPromesse1();

    await maPromesse2();

    await maPromesse3();

    //
  } catch (err) {
    //
    console.log('err :', err);
  }
}

test();
