//? La méthode Date.now()
//* Situation : Obtenir le nombre de millisecondes écoulées depuis le 1er janvier 1970 00:00:00 UTC.
//* Exemple :
const now = Date.now();
console.log("⭐ Date.now example :", { now });

//? -------------------------------------------------

//? La méthode Date.parse()
//* Situation : Analyser une représentation textuelle d'une date et retourner le nombre de millisecondes depuis le 1er janvier 1970 00:00:00 UTC.
//* Exemple :
const dateString = "January 1, 1970 00:00:00";
const timestamp = Date.parse(dateString);
console.log("⭐ Date.parse example :", { timestamp });

//? -------------------------------------------------

//? Utilisation de new Date()
//* Situation : Créer un nouvel objet Date avec une date et une heure spécifiques.
//* Exemple :
const date = new Date(2020, 0, 1); // Mois en JavaScript commence à 0 (Janvier)
console.log("⭐ new Date example :", date);

//? -------------------------------------------------
