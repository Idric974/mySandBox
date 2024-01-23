const dateBrute = new Date();
const lesMois = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
const lesJours = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
const annee = dateBrute.getFullYear();
const mois = lesMois[dateBrute.getMonth()];
const jour = dateBrute.getDate();
const jourDeLaSemaine = lesJours[dateBrute.getDay()];
const heure = dateBrute.getHours();
const minute = dateBrute.getMinutes().toString().padStart(2, "0");
const seconde = dateBrute.getSeconds().toString().padStart(2, "0");

const dateDuJour = `${jourDeLaSemaine} ${jour} ${mois} ${annee}`;
console.log("La date du jour est :", dateDuJour);

const heureDuJour = `${heure}:${minute}:${seconde}`;
console.log("Il est :", heureDuJour);

module.exports = { dateDuJour, heureDuJour };
