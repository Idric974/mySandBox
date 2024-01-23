//? La méthode Number.parseInt()
//* Situation : Convertir une chaîne en un entier selon une base spécifiée.
//* Exemple :
let stringInt = "10";
const intVal = Number.parseInt(stringInt, 10);
console.log("⭐ Number.parseInt example :", { intVal });

//? -------------------------------------------------

//? La méthode Number.parseFloat()
//* Situation : Convertir une chaîne en un nombre à virgule flottante.
//* Exemple :
let stringFloat = "3.14";
const floatVal = Number.parseFloat(stringFloat);
console.log("⭐ Number.parseFloat example :", { floatVal });

//? -------------------------------------------------

//? La méthode Number.isNaN()
//* Situation : Vérifier si une valeur est NaN (Not a Number).
//* Exemple :
let valueNaN = 0 / 0;
const isNaN = Number.isNaN(valueNaN);
console.log("⭐ Number.isNaN example :", { isNaN });

//? -------------------------------------------------

//? La méthode Number.isFinite()
//* Situation : Vérifier si une valeur est un nombre fini.
//* Exemple :
let valueFinite = 10;
const isFinite = Number.isFinite(valueFinite);
console.log("⭐ Number.isFinite example :", { isFinite });

//? -------------------------------------------------

//? La méthode Number.isInteger()
//* Situation : Vérifier si une valeur est un entier.
//* Exemple :
let valueInteger = 10;
const isInteger = Number.isInteger(valueInteger);
console.log("⭐ Number.isInteger example :", { isInteger });

//? -------------------------------------------------

//? La méthode Number.toFixed()
//* Situation : Formater un nombre en utilisant une notation à virgule fixe.
//* Exemple :
let num = 2.345;
const fixedStr = num.toFixed(2);
console.log("⭐ Number.toFixed example :", { fixedStr });

//? -------------------------------------------------
