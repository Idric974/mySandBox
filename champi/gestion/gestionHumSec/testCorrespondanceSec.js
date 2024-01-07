const correspondanceSec = require("./correspondanceSec.js");

let temperatureCorrigeeSec = 10.5;
let correspondancePressions;

const getCorrespondanceSec = () => {
  return new Promise((resolve, reject) => {
    correspondancePressions = correspondanceSec(temperatureCorrigeeSec);

    if (correspondancePressions) {
      resolve(
        console.log(
          "🟢 RESOLVE : Correspondance Sec =",
          correspondancePressions
        )
      );
    } else {
      reject(console.log("🟠 REJECT : Correspondance Sec :"));
    }
  });
};

getCorrespondanceSec();
