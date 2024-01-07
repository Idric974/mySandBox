
//* ⭐⭐ MÉTHODES SUR TABLEAUX EN JAVASCRIPT  ⭐⭐

//! Renvoie l'élément du tableau situé à cet indice.

// let myArray = [1, 2, 3, 4];
// let indice = 0;

// const Foo = myArray.at(indice);
// console.log('myArray.at :', Foo);

//! -------------------------------------------------

//! Supprime le dernier élément d'un tableau et retourne cet élément.

// let myArray = [1, 2, 3, 4];
// const Foo = myArray.pop();

// console.log('myArray.pop :', myArray); //* Supprime le dernier élément
// console.log('Foo :', Foo); //* retourne cet élément

//! -------------------------------------------------

//! La méthode push()ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.

// let myArray = [1, 2, 3, 4];
// const Foo = myArray.push(7);

// console.log('myArray.push :', myArray); //* Nouveau tableau.
// console.log('Foo :', Foo); //* Taille du tableau.

//! -------------------------------------------------

//! La méthode fill()remplit tous les éléments d'un tableau entre deux index avec une valeur statique.

// let myArray = [1, 2, 3, 4];
// const Foo = myArray.fill(1);

// console.log('myArray.push :', myArray); //* Nouveau tableau.

//! -------------------------------------------------

//! La méthode join()crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d' un objet semblable à un tableau ).

// let myArray = [1, 2, 3, 4];
// const Foo = myArray.join("_");
// console.log('myArray.join :', Foo); //* Nouveau tableau.

//! -------------------------------------------------

//! La méthode shift()permet de retirer le premier élément d'un tableau et de renvoyer cet élément. 

// let myArray = [1, 2, 3, 4];
// const Foo = myArray.shift();
// console.log('myArray.join :', myArray); //* Nouveau tableau.

//! -------------------------------------------------

//! La méthode reverse()transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.

// let myArray = [1, 2, 3, 4];
// const Foo = myArray.reverse();
// console.log('myArray.reverse :', myArray); //* Nouveau tableau.

//! -------------------------------------------------


//! La méthode unshift()ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.

// let myArray = [1, 2, 3, 4];
// const Foo = myArray.unshift(1);
// console.log('myArray.unshift :', myArray); //* Nouveau tableau.
// console.log('Foo :', Foo); //* Nouvelle longuere.

//! -------------------------------------------------

//! La méthode includes()permet de déterminer si un tableau une valeur et renvoie truesi c'est le cas, falsesinon.

// let myArray = [1, 2, 3, 4];
// const Foo = myArray.includes(2);
// console.log('myArray.includes :', Foo);

//! -------------------------------------------------

//! La méthode map()crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.

// let myArray = [1, 2, 3, 4];
// const Foo = myArray.map((num) => num + 6);
// console.log('myArray.map :', Foo);

//! -------------------------------------------------

//! La méthode find()renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument.

// let myArray = [1, 2, 3, 4];
// const Foo = myArray.find((num) => num > 1);
// console.log('myArray.find :', Foo);

//! -------------------------------------------------

//! La méthode filter()crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui renvoient une condition rendue par la fonction callback.

// let myArray = [1, 2, 3, 4];
// const Foo = myArray.filter((num) => num > 3);
// console.log('myArray.filter :', Foo);

//! -------------------------------------------------

//! La méthode every()permet de tester si tous les éléments d'un tableau présentent une condition donnée par une fonction en argument.

// let myArray = [1, 2, 3, 4];
// const Foo = myArray.every((num) => num > 0);
// console.log('myArray.every :', Foo);

//! -------------------------------------------------

//! La méthode findIndex()renvoie l' indice du premier élément du tableau qui satisfait une condition donnée par une fonction.

// let myArray = [1, 2, 3, 4];
// const Foo = myArray.findIndex((num) => num > 3);
// console.log('myArray.findIndex :', Foo);

//! -------------------------------------------------


//! La méthode reduce()applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.

// let myArray = [1, 2, 3, 4];

// const Foo = myArray.reduce((acc, num) => acc + num, 0);
// console.log('myArray.findIndex :', Foo);

//! -------------------------------------------------

