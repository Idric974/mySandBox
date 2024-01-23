//? La méthode setTimeout()
//* Situation : Exécuter un morceau de code ou une fonction après un délai spécifié.
//* Exemple :
const timeoutId = setTimeout(() => {
  console.log("⭐ setTimeout example : Executed after delay");
}, 1000); // Exécute après 1000 millisecondes (1 seconde)

//? -------------------------------------------------

//? La méthode clearTimeout()
//* Situation : Annuler un timeout défini avec setTimeout().
//* Exemple :
clearTimeout(timeoutId);
console.log("⭐ clearTimeout example : Timeout cleared");

//? -------------------------------------------------

//? La méthode setInterval()
//* Situation : Exécuter une fonction à intervalles réguliers.
//* Exemple :
let num = 0;
const intervalId = setInterval(() => {
  num++;
  console.log("⭐ setInterval example : Executed at each interval", { num });
  if (num >= 5) {
    clearInterval(intervalId);
  }
}, 1000); // Exécute toutes les 1000 millisecondes (1 seconde)

//? -------------------------------------------------

//? La méthode clearInterval()
//* Situation : Annuler un interval défini avec setInterval().
//* Exemple :
//clearInterval(intervalId);
//console.log("⭐ clearInterval example : Interval cleared");

//? -------------------------------------------------
