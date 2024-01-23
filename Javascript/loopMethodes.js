//? La boucle while
//* Situation : Exécuter un bloc de code tant qu'une condition spécifiée est vraie.
//* Exemple :
let i = 0;
const numbersWhile = [];
while (i < 4) {
  numbersWhile.push(i);
  i++;
}
console.log("⭐ while example :", { numbersWhile });

//? -------------------------------------------------

//? La boucle for
//* Situation : Exécuter un bloc de code un nombre défini de fois.
//* Exemple :
const numbersFor = [];
for (let i = 0; i < 4; i++) {
  numbersFor.push(i);
}
console.log("⭐ for example :", { numbersFor });

//? -------------------------------------------------

//? La boucle for in
//* Situation : Itérer sur toutes les propriétés énumérables d'un objet.
//* Exemple :
const objForIn = { a: 1, b: 2, c: 3 };
const keysForIn = [];
for (let key in objForIn) {
  keysForIn.push(key);
}
console.log("⭐ for in example :", { keysForIn });

//? -------------------------------------------------

//? La boucle for of
//* Situation : Créer une boucle qui itère sur des objets itérables (comme les tableaux, les chaînes de caractères).
//* Exemple :
const arrayForOf = ["a", "b", "c"];
const elementsForOf = [];
for (let element of arrayForOf) {
  elementsForOf.push(element);
}
console.log("⭐ for of example :", { elementsForOf });

//? -------------------------------------------------

//? La méthode forEach()
//* Situation : Exécuter une fonction sur chaque élément d'un tableau.
//* Exemple :
let arrayForEach = [1, 2, 3, 4];
const squaresForEach = [];
arrayForEach.forEach((x) => {
  squaresForEach.push(x * x);
});
console.log("⭐ forEach example :", { squaresForEach });

//? -------------------------------------------------
