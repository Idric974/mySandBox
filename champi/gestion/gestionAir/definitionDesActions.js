// @ts-nocheck

let delta = 4;
//* -------------------------------------------------
let dureeAction;

if (delta >= 3) {
  dureeAction = 15000;
} else if (delta > 1.5 && delta < 3) {
  dureeAction = 15000;
} else if (delta > 1 && delta <= 1.5) {
  dureeAction = 5000;
} else if (delta > 0.5 && delta <= 1) {
  dureeAction = 2000;
} else if (delta > 0.3 && delta <= 0.5) {
  dureeAction = 1000;
} else if (delta >= -0.3 && delta <= 0.3) {
  dureeAction = 0;
} else if (delta < -0.3 && delta >= -0.5) {
  dureeAction = 1000;
} else if (delta < -0.5 && delta >= -1) {
  dureeAction = 2000;
} else if (delta < -1 && delta >= -1.5) {
  dureeAction = 5000;
} else if (delta < -1.5 && delta > -3) {
  dureeAction = 15000;
} else if (delta <= -3) {
  dureeAction = 15000;
}

console.log("🟢 Duree d'action", { dureeAction });

let temperatureSuperieurPlus3 = "le delta est supérieur à +3°C";
let temperatureInferieurMoins3 = "le delta est inférieur à -3°C";

const definitionDesActions = () => {
  return new Promise((resolve, reject) => {
    try {
      //

      //* 🖐 Condition à 15 secondes POSITIF.
      if (delta >= 3) {
        console.log("🟠 ALERTE | Gestions Air | Le delta est supérieur à 3°C");
        sendSMS(temperatureSuperieurPlus3);

        new Gpio(23, "out");
        console.log("Ouverture du froid");

        if (etatVanneBDD >= 100) {
          etatRelay = 100;
        }

        actionRelay = 1;
        miseAjourEtatRelay();

        setTimeout(() => {
          new Gpio(23, "in");
          console.log("FIN Ouverture du froid");
          actionRelay = 0;
          miseAjourEtatRelay();
          resolve();
        }, dureeAction);
      }

      //

      //* 🖐 Condition à 15 secondes POSITIF.
      if (delta > 1.5 && delta < 3) {
        console.log(
          "🟢 INFO POSITIF | Gestions Air | delta > 1.5 && delta < 3"
        );
      }

      //

      //* 🖐 Condition à 5 secondes POSITIF.
      if (delta > 1 && delta <= 1.5) {
        console.log(
          "🟢 INFO POSITIF | Gestions Air | delta > 1 && delta <= 1.5"
        );
      }

      //

      //* 🖐 Condition à 2 secondes POSITIF.
      if (delta > 0.5 && delta <= 1) {
        console.log(
          "🟢 INFO POSITIF | Gestions Air | delta > 0.5 && delta <= 1"
        );
      }

      //* 🖐 Condition à 1 secondes POSITIF.
      if (delta > 0.3 && delta <= 0.5) {
        console.log(
          "🟢 INFO POSITIF | Gestions Air | delta > 0.3 && delta <= 0.5"
        );
      }
      //

      //* 🟠 Condition à 0 secondes NEUTRE 🟠.
      if (delta >= -0.3 && delta <= 0.3) {
        console.log(
          "🟢 INFO NEUTRE | Gestions Air | delta >= -0.3 && delta <= 0.3"
        );
      }

      //* 🖐 Condition à 1 secondes NÉGATIF.
      if (delta < -0.3 && delta >= -0.5) {
        console.log(
          "🟢 INFO NÉGATIF | Gestions Air | delta < -0.3 && delta >= -0.5)"
        );
      }
      //

      //* 🖐 Condition à 2 secondes NÉGATIF.
      if (delta < -0.5 && delta >= -1) {
        console.log(
          "🟢 INFO NÉGATIF | Gestions Air | delta < -0.5 && delta >= -1"
        );
      }
      //

      //* 🖐 Condition à 5 secondes NÉGATIF.
      if (delta < -1 && delta >= -1.5) {
        console.log(
          "🟢 INFO NÉGATIF | Gestions Air | delta < -1 && delta >= -1.5"
        );
      }
      //

      //* 🖐 Condition à 15 secondes NÉGATIF.
      if (delta < -1.5 && delta > -3) {
        console.log(
          "🟢 INFO NÉGATIF | Gestions Air | delta < -1.5 && delta > -3"
        );
      }
      //

      //* 🖐 Condition à 15 secondes NÉGATIF.
      if (delta <= -3) {
        console.log("🟠 ALERTE | Gestions Air | Le delta est inférieur à 3°C");
        sendSMS(temperatureInferieurMoins3);
      }
      //
    } catch (error) {
      console.log("🟠 TRY CATCH ERROR : my error :", error);
      reject(console.log("🟠 TRY CATCH ERROR : my reject :", error));
    }
  });
};

//? Résolution des promesses.

const handleMyPromise = async () => {
  try {
    await definitionDesActions();
  } catch (err) {
    console.log("🟠 CATCH ERROR : Résolution des promesses :", err);
  }
};
handleMyPromise();

//? -------------------------------------------------
