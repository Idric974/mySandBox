
// const monObjet = {};

let monObjet = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

if (Object.keys(monObjet).length === 0 && monObjet.constructor === Object) {

    console.log("🔴 ERROR : Objet vide");

} else {

    console.log("🟢 SUCCESS ACTION : Objet avec de la data");

}