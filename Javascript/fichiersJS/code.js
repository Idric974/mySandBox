//! Fonction asynchrone.

// const axios = require('axios');

// const maPromesse = new Promise((resolve, reject) => {
//   axios
//     .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//     .then((response) => {
//       console.log(response.data);
//       resolve();
//     })
//     .catch((error) => {
//       console.log(error);
//       reject();
//     });
// });

// let action = async () => {
//   let go = await maPromesse;
//   return go;
// };

// action()
//   .then(() => {
//     console.log('Then 1');
//   })

//   .then(() => {
//     console.log('Then 2');
//   })

//   .catch((e) => {
//     console.log(jaune, '[ GESTION AIR CALCULES  ] Erreur gestion Air : ', e);
//   });

//! --------------------------------------------------

//! Fonction avec GET Axios.

// const axios = require('axios');

// axios({
//   method: 'get',
//   url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
// })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! --------------------------------------------------

//! Fonction avec POST Axios.

// const axios = require('axios');

// axios({
//   method: 'post',
//   url: 'https:.........',
// })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//! --------------------------------------------------

//! Fonction fetch POST.

// const headers = new Headers();
// headers.append(
//   'Content-Type',
//   'application/json',
//   'Access-Control-Allow-Origin: *'
// );

// const values = {
//   title: title,
//   nombreDeCylindres: nombreDeCylindres,
//   nombreDeSoupapes: nombreDeSoupapes,
//   cylindree: cylindree,
// };
// console.log('Les values : ', values);

// const body = JSON.stringify(values);
// console.log('Le body : ', body);

// const parametresDeRequete = {
//   method: 'POST',
//   headers: headers,
//   body: body,
// };
// console.log('Les parametres de requete : ', parametresDeRequete);

// let url =
//   'https://rocky-temple-30433.herokuapp.com/api/dataFromExtensionRoute/dataFromExtension/';

// fetch(url, parametresDeRequete)
//   .then(function (r) {
//     return r.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(
//       "Il y a eu un problème avec l'opération fetch : " + error.message
//     );
//   });

//! --------------------------------------------------

//! Logique pour la connexion d’un utilisateur.

// exports.connexionUser = (req, res, next) => {
//   let data = req.body;
//   console.log('Datas de connexions : ', data);

//   res.status(200).json({ message: 'Requête  OK' });
// };

//! -------------------------------------------------

//! Traitement sur tableaux.

// let someArr = [1, 2, 3, 4, 5];

//* 1) Doubler les valeaurs d'un tableau.

// const doublerValeur = someArr.map((e) => e * 2);

// console.log('doublerValeur : ', doublerValeur);

//* -------------------------------------------------

//* 2) Appliquer un filtre sur un tableau.

// Résultat est pair.
// const evenArr = someArr.filter((e) => e % 2 == 0);
// console.log('evenArr : ', evenArr);

// Résultat est impair.
// const addArr = someArr.filter((e) => e % 2 != 0);
// console.log('addArr : ', addArr);

//* -------------------------------------------------

//* 3) Trouver la valeur max d'un tableau.

//? max = accumulateur
//? e = élément en cours

// //* Trouverla valeur max d'un talbeau.
// const maxValeurArr = someArr.reduce((max, e) => Math.max(max, e));
// console.log('maxValeurArr : ', maxValeurArr);

// //* Trouverla valeur max d'un min.
// const minValeurArr = someArr.reduce((max, e) => Math.min(max, e));
// console.log('minValeurArr : ', minValeurArr);

//* 3) Faire une somme sur un tableau.

// const sumValueArr = someArr.reduce((sum, e) => sum + e);
// console.log('sumValueArr : ', sumValueArr);

//* -------------------------------------------------
//! -------------------------------------------------
