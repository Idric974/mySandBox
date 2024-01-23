//? La méthode document.getElementById()
//* Situation : Sélectionner un élément par son ID.
//* Exemple :
// Suppose qu'il y a un élément avec l'ID 'myElement' dans le HTML
const elementById = document.getElementById("myElement");
console.log("⭐ document.getElementById example :", { elementById });

//? -------------------------------------------------

//? La méthode document.querySelector()
//* Situation : Sélectionner le premier élément qui correspond au sélecteur CSS spécifié.
//* Exemple :
// Suppose qu'il y a un élément avec la classe 'myClass' dans le HTML
const elementByQuery = document.querySelector(".myClass");
console.log("⭐ document.querySelector example :", { elementByQuery });

//? -------------------------------------------------

//? La méthode document.querySelectorAll()
//* Situation : Sélectionner tous les éléments qui correspondent au sélecteur CSS spécifié.
//* Exemple :
// Suppose qu'il y a plusieurs éléments 'div' dans le HTML
const elementsByQueryAll = document.querySelectorAll("div");
console.log("⭐ document.querySelectorAll example :", { elementsByQueryAll });

//? -------------------------------------------------

//? La méthode document.createElement()
//* Situation : Créer un nouvel élément DOM.
//* Exemple :
const div = document.createElement("div");
console.log("⭐ document.createElement example :", { div });

//? -------------------------------------------------

//? La méthode element.appendChild()
//* Situation : Ajouter un nouvel enfant à un élément parent.
//* Exemple :
// parentElement.appendChild(childElement);

//? -------------------------------------------------

//? La méthode element.innerHTML
//* Situation : Modifier le contenu HTML d'un élément.
//* Exemple :
// element.innerHTML = 'New content';

//? -------------------------------------------------

//? La méthode element.addEventListener()
//* Situation : Attacher un gestionnaire d'événements à un élément.
//* Exemple :
// element.addEventListener('click', eventHandler);

//? -------------------------------------------------

//? La méthode element.style
//* Situation : Modifier le style d'un élément.
//* Exemple :
// element.style.color = 'blue';

//? -------------------------------------------------

//? La méthode element.setAttribute()
//* Situation : Ajouter ou modifier un attribut sur l'élément.
//* Exemple :
// element.setAttribute('data-custom', 'value');

//? -------------------------------------------------

//? La méthode element.removeAttribute()
//* Situation : Supprimer un attribut de l'élément.
//* Exemple :
// element.removeAttribute('data-custom');

//? -------------------------------------------------
