//? La méthode forEach()
//* Situation : Parcourir un tableau pour afficher chaque élément.
//* Exemple :
let arrayForEach = [10, 20, 30, 40];

console.log("forEach example:");

arrayForEach.forEach((element) => {
  //* Affiche chaque score du tableau.
  console.log({ element });
});

//? -------------------------------------------------

//? La méthode map()
//* Situation : Transformer chaque élément d'un tableau.
//* Exemple :
let arrayMap = [1, 2, 3, 4];
const squares = arrayMap.map((x) => x * x);
//* Affiche le nouveau tableau avec les carrés des nombres.

console.log("map example :", { squares });

//? -------------------------------------------------

//? La méthode filter()
//* Situation : Sélectionner des éléments spécifiques d'un tableau.
//* Exemple :
let arrayFilter = [1, 2, 3, 4];
const evens = arrayFilter.filter((x) => x % 2 === 0);
//* Affiche un nouveau tableau contenant uniquement les nombres pairs.
console.log("filter example:");
console.log({ evens });

//? -------------------------------------------------

//? La méthode reduce()
//* Situation : Calculer une valeur unique à partir d'un tableau.
//* Exemple :
let arrayReduce = [1, 2, 3, 4];
const sum = arrayReduce.reduce((acc, curr) => acc + curr, 0);
// Affiche la somme des éléments du tableau.
console.log("reduce example:");
console.log({ sum });

//? -------------------------------------------------

//? La méthode find()
//* Situation : Trouver un élément spécifique dans un tableau.
//* Exemple :
let arrayFind = [1, 2, 3, 4];
const found = arrayFind.find((x) => x > 2);
// Affiche le premier élément supérieur à 2.
console.log("find example:");
console.log({ found });

//? -------------------------------------------------

//? La méthode indexOf()
//* Situation : Trouver l'indice d'un élément spécifique dans un tableau.
//* Exemple :
let arrayIndexOf = [1, 2, 3, 4];
const index = arrayIndexOf.indexOf(3);
// Affiche l'indice de l'élément 3 dans le tableau.
console.log("indexOf example:");
console.log({ index });

//? -------------------------------------------------

//? La méthode push()
//* Situation : Ajouter un élément à la fin d'un tableau.
//* Exemple :
let arrayPush = [1, 2, 3, 4];
arrayPush.push(5);
// Affiche le tableau après l'ajout de l'élément.
console.log("push example:");
console.log(arrayPush);

//? -------------------------------------------------

//? La méthode pop()
//* Situation : Supprimer le dernier élément d'un tableau.
//* Exemple :
let arrayPop = [1, 2, 3, 4];
const lastItem = arrayPop.pop();
// Affiche l'élément supprimé.
console.log("pop example:");
console.log({ lastItem });

//? -------------------------------------------------

//? La méthode shift()
//* Situation : Supprimer le premier élément d'un tableau.
//* Exemple :
let arrayShift = [1, 2, 3, 4];
const firstItem = arrayShift.shift();
// Affiche l'élément supprimé.
console.log("shift example:");
console.log({ firstItem });

//? -------------------------------------------------

//? La méthode unshift()
//* Situation : Ajouter un ou plusieurs éléments au début d'un tableau.
//* Exemple :
let arrayUnshift = [1, 2, 3, 4];
arrayUnshift.unshift(0);
// Affiche le tableau après l'ajout de l'élément.
console.log("unshift example:");
console.log(arrayUnshift);

//? -------------------------------------------------

//? La méthode splice()
//* Situation : Modifier le contenu d'un tableau en ajoutant ou en supprimant des éléments.
//* Exemple :
let arraySplice = [1, 2, 3, 4];
arraySplice.splice(2, 1, "a", "b");
// Affiche le tableau après la modification.
console.log("splice example:");
console.log(arraySplice);

//? -------------------------------------------------

//? La méthode slice()
//* Situation : Extraire une portion d'un tableau dans un nouveau tableau.
//* Exemple :
let arraySlice = [1, 2, 3, 4];
const sliced = arraySlice.slice(1, 3);
// Affiche la portion extraite du tableau.
console.log("slice example:");
console.log({ sliced });

//? -------------------------------------------------

//? La méthode concat()
//* Situation : Fusionner deux ou plusieurs tableaux.
//* Exemple :
let array1Concat = [1, 2, 3];
let array2Concat = [4, 5, 6];
const mergedArray = array1Concat.concat(array2Concat);
// Affiche le tableau résultant de la fusion.
console.log("concat example:");
console.log({ mergedArray });

//? -------------------------------------------------

//? La méthode join()
//* Situation : Joindre tous les éléments d'un tableau dans une chaîne de caractères.
//* Exemple :
let arrayJoin = [1, 2, 3, 4];
const str = arrayJoin.join(", ");
// Affiche la chaîne de caractères résultante.
console.log("join example:");
console.log({ str });

//? -------------------------------------------------

//? La méthode includes()
//* Situation : Vérifier si un tableau contient un élément spécifique.
//* Exemple :
let arrayIncludes = [1, 2, 3, 4];
const hasItem = arrayIncludes.includes(2);
// Affiche si l'élément est présent dans le tableau.
console.log("includes example:");
console.log({ hasItem });

//? -------------------------------------------------

//? La méthode some()
//* Situation : Vérifier si un tableau contient au moins un élément qui satisfait une condition donnée.
//* Exemple : Vérifier si un tableau contient des nombres négatifs.
let arraySome = [1, -2, 3, 4];
const hasNegative = arraySome.some((x) => x < 0);
//* Affiche si le tableau contient des nombres négatifs.

console.log("some example :", { hasNegative });

//? -------------------------------------------------

//? La méthode every()
//* Situation : Vérifier si tous les éléments d'un tableau satisfont une condition donnée.
//* Exemple : Vérifier si tous les éléments d'un tableau sont positifs.
let arrayEvery = [1, 2, 3, 4];
const allPositive = arrayEvery.every((x) => x > 0);
//* Affiche si tous les éléments du tableau sont positifs.

console.log("every example :", { allPositive });

//? -------------------------------------------------

//? La méthode sort()
//* Situation : Trier les éléments d'un tableau.
//* Exemple : Trier un tableau de nombres dans l'ordre croissant.
let arraySort = [3, 1, 4, 2];
arraySort.sort((a, b) => a - b);
//* Affiche le tableau trié.

console.log("sort example :", arraySort);

//? -------------------------------------------------

//? La méthode reverse()
//* Situation : Inverser l'ordre des éléments d'un tableau.
//* Exemple : Inverser l'ordre des éléments d'un tableau de nombres.
let arrayReverse = [1, 2, 3, 4];
arrayReverse.reverse();
//* Affiche le tableau avec l'ordre des éléments inversé.

console.log("reverse example :", arrayReverse);

//? -------------------------------------------------
