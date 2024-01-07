// console.log('Test dossier boucles');

//! La boucle while.

// let i = 0;

// while (i < 10) {
//     console.log('Test boucle while', i);
//     i = i + 1
// };

//! -------------------------------------------------

//! La boucle For.

for (let i = 0; i < 10; i++) {
    console.log('Test boucle for', i);
};

//! -------------------------------------------------

//! La boucle For sur un note.

// const note = [10, 20, 30, 40, 50]

// for (let i = 0; i < note.length; i++) {
//     console.log('Test boucle for sur note', note[i]);
// };

//! -------------------------------------------------

//! La boucle For in sur un note.

// const note = [10, 20, 30, 40, 50]

// for (let i in note) {
//     console.log('Test boucle For In sur note', note[i]);
// };

//! -------------------------------------------------

//! La boucle For Of sur un note, attention ne fonctionne que sur les tableaux.

// const notes = [10, 20, 30, 40, 50];
// const person = {
//     firsName: 'Idric',
//     lastName: 'Evarne'
// };

// for (let note of notes) {
//     console.log('Test boucle For In sur note', note);
// };

//! -------------------------------------------------

// let chiffre = prompt('entrez un chiffre entre 1 et 10');

// if (chiffre > 10 || chiffre < 0) {

//     console.log('ERREUR');

// } else {
//     console.log('SUPER');

//     while (chiffre >= 0) {
//         console.log('Test boucle while', chiffre);
//         chiffre--
//     }

// }