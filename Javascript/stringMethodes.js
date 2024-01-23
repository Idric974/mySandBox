//? La méthode charAt()
//* Situation : Récupérer un caractère à un index spécifique d'une chaîne.
//* Exemple :
let strCharAt = "Hello World!";
const char = strCharAt.charAt(1);
console.log("charAt example :", { char });

//? -------------------------------------------------

//? La méthode concat()
//* Situation : Concaténer deux chaînes de caractères.
//* Exemple :
let str1 = "Hello";
let str2 = " World!";
const combinedStr = str1.concat(str2);
console.log("concat example :", { combinedStr });

//? -------------------------------------------------

//? La méthode includes()
//* Situation : Vérifier si une chaîne contient une sous-chaîne spécifiée.
//* Exemple :
let strIncludes = "Hello World!";
const hasSubstring = strIncludes.includes("World");
console.log("includes example :", { hasSubstring });

//? -------------------------------------------------

//? La méthode indexOf()
//* Situation : Trouver l'index de la première occurrence d'une sous-chaîne dans une chaîne.
//* Exemple :
let strIndexOf = "Hello World!";
const index = strIndexOf.indexOf("World");
console.log("indexOf example :", { index });

//? -------------------------------------------------

//? La méthode lastIndexOf()
//* Situation : Trouver l'index de la dernière occurrence d'une sous-chaîne dans une chaîne.
//* Exemple :
let strLastIndexOf = "Hello World, Hello Universe!";
const lastIndex = strLastIndexOf.lastIndexOf("Hello");
console.log("lastIndexOf example :", { lastIndex });

//? -------------------------------------------------

//? La méthode match()
//* Situation : Rechercher des correspondances d'une expression régulière dans une chaîne.
//* Exemple :
let strMatch = "Hello World!";
const matches = strMatch.match(/lo/g);
console.log("match example :", { matches });

//? -------------------------------------------------

//? La méthode repeat()
//* Situation : Répéter une chaîne un certain nombre de fois.
//* Exemple :
let strRepeat = "Hello ";
const repeatedStr = strRepeat.repeat(3);
console.log("repeat example :", { repeatedStr });

//? -------------------------------------------------

//? La méthode replace()
//* Situation : Remplacer une sous-chaîne par une autre dans une chaîne.
//* Exemple :
let strReplace = "Hello World!";
const replacedStr = strReplace.replace("World", "Universe");
console.log("replace example :", { replacedStr });

//? -------------------------------------------------

//? La méthode search()
//* Situation : Rechercher l'index de la première correspondance d'une expression régulière dans une chaîne.
//* Exemple :
let strSearch = "Hello World!";
const searchIndex = strSearch.search(/World/);
console.log("search example :", { searchIndex });

//? -------------------------------------------------

//? La méthode slice()
//* Situation : Extraire une partie d'une chaîne.
//* Exemple :
let strSlice = "Hello World!";
const slicedStr = strSlice.slice(6, 11);
console.log("slice example :", { slicedStr });

//? -------------------------------------------------

//? La méthode split()
//* Situation : Diviser une chaîne en un tableau de sous-chaînes.
//* Exemple :
let strSplit = "Hello World!";
const tokens = strSplit.split(" ");
console.log("split example :", { tokens });

//? -------------------------------------------------

//? La méthode substring()
//* Situation : Extraire une sous-chaîne entre deux indices.
//* Exemple :
let strSubstring = "Hello World!";
const substring = strSubstring.substring(1, 5);
console.log("substring example :", { substring });

//? -------------------------------------------------

//? La méthode toLowerCase()
//* Situation : Convertir une chaîne en minuscules.
//* Exemple :
let strToLower = "HELLO WORLD!";
const lowerStr = strToLower.toLowerCase();
console.log("toLowerCase example :", { lowerStr });

//? -------------------------------------------------

//? La méthode toUpperCase()
//* Situation : Convertir une chaîne en majuscules.
//* Exemple :
let strToUpper = "hello world!";
const upperStr = strToUpper.toUpperCase();
console.log("toUpperCase example :", { upperStr });

//? -------------------------------------------------

//? La méthode trim()
//* Situation : Supprimer les espaces blancs au début et à la fin d'une chaîne.
//* Exemple :
let strTrim = "  Hello World!  ";
const trimmedStr = strTrim.trim();
console.log("trim example :", { trimmedStr });

//? -------------------------------------------------
