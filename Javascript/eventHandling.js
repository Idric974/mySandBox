//? La propriété element.onclick
//* Situation : Assigner un gestionnaire d'événement de clic directement à un élément.
//* Exemple :
// element.onclick = function() { console.log("⭐ element.onclick example : Clicked"); };

//? -------------------------------------------------

//? La méthode element.addEventListener()
//* Situation : Attacher un gestionnaire d'événements à un élément.
//* Exemple :
// function eventHandler() { console.log("⭐ element.addEventListener example : Clicked"); }
// element.addEventListener('click', eventHandler);

//? -------------------------------------------------

//? La méthode element.removeEventListener()
//* Situation : Retirer un gestionnaire d'événements d'un élément.
//* Exemple :
// element.removeEventListener('click', eventHandler);

//? -------------------------------------------------

//? La méthode event.preventDefault()
//* Situation : Empêcher le comportement par défaut d'un événement.
//* Exemple :
// element.addEventListener('click', event => {
//     event.preventDefault();
//     console.log("⭐ event.preventDefault example : Default action prevented");
// });

//? -------------------------------------------------
