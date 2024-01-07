const dateBrute = new Date();
const lesMois = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];
const lesJours = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
const annee = dateBrute.getFullYear();
const mois = lesMois[dateBrute.getMonth()];
const jour = dateBrute.getDate();
const jourDeLaSemaine = lesJours[dateBrute.getDay() - 1];
const heure = dateBrute.getHours();
const minute = dateBrute.getMinutes();
const seconde = dateBrute.getSeconds();

const dateDuJour = `${jourDeLaSemaine} ${jour} ${mois} ${annee}`;
//console.log('La date du jour est : ', dateDuJour);

const heurDuJour = `${heure}:${minute}:${seconde}`;
//console.log('Il est : ', heurDuJour);

module.exports = { dateDuJour, heurDuJour };
