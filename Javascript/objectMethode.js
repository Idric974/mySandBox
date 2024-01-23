//? La méthode Object.keys()
//* Situation : Récupérer les clés d'un objet.
//* Exemple :
let objKeys = { a: 1, b: 2, c: 3 };
const keys = Object.keys(objKeys);
console.log("⭐ Object.keys example :", { keys });

//? -------------------------------------------------

//? La méthode Object.values()
//* Situation : Récupérer les valeurs d'un objet.
//* Exemple :
let objValues = { a: 1, b: 2, c: 3 };
const values = Object.values(objValues);
console.log("⭐ Object.values example :", { values });

//? -------------------------------------------------

//? La méthode Object.entries()
//* Situation : Récupérer les paires clé/valeur d'un objet.
//* Exemple :
let objEntries = { a: 1, b: 2, c: 3 };
const entries = Object.entries(objEntries);
console.log("⭐ Object.entries example :", { entries });

//? -------------------------------------------------

//? La méthode Object.assign()
//* Situation : Copier les valeurs de toutes les propriétés propres énumérables d'un ou plusieurs objets source vers un objet cible.
//* Exemple :
let obj1 = { a: 1 },
  obj2 = { b: 2 };
const newObj = Object.assign({}, obj1, obj2);
console.log("⭐ Object.assign example :", { newObj });

//? -------------------------------------------------

//? La méthode Object.freeze()
//* Situation : Geler un objet pour empêcher de nouvelles propriétés d'être ajoutées et les existantes d'être supprimées ou modifiées.
//* Exemple :
let objFreeze = { a: 1 };
const frozenObj = Object.freeze(objFreeze);
console.log("⭐ Object.freeze example :", { frozenObj });

//? -------------------------------------------------

//? La méthode Object.isFrozen()
//* Situation : Vérifier si un objet est gelé.
//* Exemple :
const isFrozen = Object.isFrozen(frozenObj);
console.log("⭐ Object.isFrozen example :", { isFrozen });

//? -------------------------------------------------

//? La méthode Object.seal()
//* Situation : Sceller un objet pour empêcher de nouvelles propriétés d'être ajoutées et marquer toutes les propriétés existantes comme non-configurables.
//* Exemple :
let objSeal = { a: 1 };
const sealedObj = Object.seal(objSeal);
console.log("⭐ Object.seal example :", { sealedObj });

//? -------------------------------------------------

//? La méthode Object.isSealed()
//* Situation : Vérifier si un objet est scellé.
//* Exemple :
const isSealed = Object.isSealed(sealedObj);
console.log("⭐ Object.isSealed example :", { isSealed });

//? -------------------------------------------------

//? La méthode Object.create()
//* Situation : Créer un nouvel objet avec l'objet prototype et les propriétés spécifiées.
//* Exemple :
const prototypeObj = { a: 1 };
const newObjCreate = Object.create(prototypeObj);
console.log("⭐ Object.create example :", { newObjCreate });

//? -------------------------------------------------

//? La méthode Object.hasOwnProperty()
//* Situation : Vérifier si un objet a une propriété spécifiée comme propriété directe (et non héritée).
//* Exemple :
let objHasOwnProperty = { a: 1 };
const hasProp = objHasOwnProperty.hasOwnProperty("a");
console.log("⭐ Object.hasOwnProperty example :", { hasProp });

//? -------------------------------------------------
