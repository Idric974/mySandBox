//? La méthode parseInt()
//* Situation : Convertir une chaîne en un entier selon une base spécifiée.
//* Exemple :
let stringInt = "10";
const intVal = parseInt(stringInt, 10);
console.log("⭐ parseInt example :", { intVal });

//? -------------------------------------------------

//? La méthode parseFloat()
//* Situation : Convertir une chaîne en un nombre à virgule flottante.
//* Exemple :
let stringFloat = "3.14";
const floatVal = parseFloat(stringFloat);
console.log("⭐ parseFloat example :", { floatVal });

//? -------------------------------------------------

//? La méthode isNaN()
//* Situation : Vérifier si une valeur est NaN (Not a Number).
//* Exemple :
let valueNaN = 0 / 0;
const isNaN = isNaN(valueNaN);
console.log("⭐ isNaN example :", { isNaN });

//? -------------------------------------------------

//? La méthode isFinite()
//* Situation : Vérifier si une valeur est un nombre fini.
//* Exemple :
let valueFinite = 10;
const isFinite = isFinite(valueFinite);
console.log("⭐ isFinite example :", { isFinite });

//? -------------------------------------------------
