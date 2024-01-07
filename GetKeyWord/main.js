
// Sélectionne la div avec la classe bg_fff
let div = document.querySelector('.bg_fff');

// Sélectionne toutes les balises p avec la classe keyword_text_value_popup dans cette div
let paragraphs = div.querySelectorAll('.keyword_text_value_popup');

// Crée un tableau pour stocker les mots
let words = [];

// Parcourt chaque paragraphe et ajoute son texte au tableau
paragraphs.forEach(function (p) {
    words.push(p.textContent);
});

// Crée une chaîne avec tous les mots, séparés par une virgule
let wordsString = words.join(', ');

// Affiche la chaîne dans la console
console.log(wordsString);


