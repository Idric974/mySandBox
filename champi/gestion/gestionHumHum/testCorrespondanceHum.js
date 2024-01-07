const correspondanceHum = require("./correspondanceHum.js");

let temperatureCorrigeeHum = 10.5;
let correspondancePressions;

const getCorrespondanceHum = () => {
  return new Promise((resolve, reject) => {
    correspondancePressions = correspondanceHum(temperatureCorrigeeHum);

    if (correspondancePressions) {
      resolve(
        console.log(
          "🟢 RESOLVE : Correspondance Hum =",
          correspondancePressions
        )
      );
    } else {
      reject(console.log("🟠 REJECT : Correspondance Hum :"));
    }
  });
};

getCorrespondanceHum();
