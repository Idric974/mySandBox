//? La méthode JSON.stringify()
//* Situation : Convertir un objet JavaScript en une chaîne JSON.
//* Exemple :
let objStringify = { name: "John", age: 30 };
const jsonString = JSON.stringify(objStringify);
console.log("⭐ JSON.stringify example :", { jsonString });

//? -------------------------------------------------

//? La méthode JSON.parse()
//* Situation : Analyser une chaîne JSON pour créer un objet JavaScript.
//* Exemple :
let jsonStringParse = '{"name":"John","age":30}';
const objParse = JSON.parse(jsonStringParse);
console.log("⭐ JSON.parse example :", { objParse });

//? -------------------------------------------------
