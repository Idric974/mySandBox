//? La méthode Promise.then()
//* Situation : Gérer la valeur de résolution d'une Promise.
//* Exemple :
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
promise.then((value) => {
  console.log("⭐ Promise.then example :", { value });
});

//? -------------------------------------------------

//? La méthode Promise.catch()
//* Situation : Gérer l'erreur d'une Promise.
//* Exemple :
promise.catch((error) => {
  console.log("⭐ Promise.catch example :", { error });
});

//? -------------------------------------------------

//? La méthode Promise.finally()
//* Situation : Exécuter un code après la résolution ou le rejet d'une Promise.
//* Exemple :
promise.finally(() => {
  console.log("⭐ Promise.finally example : Executed");
});

//? -------------------------------------------------

//? La méthode Promise.all()
//* Situation : Attendre que toutes les Promises d'un tableau soient résolues.
//* Exemple :
let promise1 = Promise.resolve(3);
let promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "foo")
);
Promise.all([promise1, promise2]).then((values) => {
  console.log("⭐ Promise.all example :", { values });
});

//? -------------------------------------------------

//? La méthode Promise.race()
//* Situation : Résoudre ou rejeter dès que l'une des Promises du tableau se résout ou se rejette.
//* Exemple :
let promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "one")
);
let promise4 = new Promise((resolve, reject) =>
  setTimeout(resolve, 500, "two")
);
Promise.race([promise3, promise4]).then((value) => {
  console.log("⭐ Promise.race example :", { value });
});

//? -------------------------------------------------

//? Utilisation de async function
//* Situation : Déclarer une fonction asynchrone qui peut utiliser await pour attendre les Promises.
//* Exemple :
// Remarque : Cette fonction doit être dans un contexte où 'fetch' est défini (par exemple, un navigateur ou Node.js avec un polyfill)
/*
async function fetchData() {
  try {
      const response = await fetch('https://example.com/data');
      const data = await response.json();
      console.log("⭐ async function example :", { data });
  } catch (error) {
      console.log("⭐ async function error :", { error });
  }
}
*/

//? -------------------------------------------------
