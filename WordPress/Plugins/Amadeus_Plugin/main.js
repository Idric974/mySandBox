console.log('Salut dossier type');
console.log('Hello world');

let typeDeVol;
let aeroportDepart;
let aeroportArrivee;
let dateDepart;
let dateArrive;
let classPassager;
let passagerAdulte;
let passagerEnfant;
let passagerBebe;

document.querySelector('#flight-search-lgtv').addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log(e);

    const form = e.currentTarget;
    const data = new FormData(form);

    typeDeVol = data.get('typeDeVol');
    aeroportDepart = data.get('aeroportDepart');
    aeroportArrivee = data.get('aeroportArrivee');
    dateDepart = data.get('dateDepart');
    dateArrive = data.get('dateArrive');
    classPassager = data.get('classPassager');
    passagerAdulte = data.get('passagerAdulte');
    passagerEnfant = data.get('passagerEnfant');
    passagerBebe = data.get('passagerBebe');

    console.log('Type De Vol :', typeDeVol);
    console.log('Aeroport Départ :', aeroportDepart);
    console.log('Aéroport Arrivée :', aeroportArrivee);
    console.log('Date Depart :', dateDepart);
    console.log('Date Arrive :', dateArrive);
    console.log('class Passager :', classPassager);
    console.log('Passager Adulte :', passagerAdulte);
    console.log('Passager Enfant :', passagerEnfant);
    console.log('Passager Bébe :', passagerBebe);

    if (typeDeVol |
        aeroportDepart |
        aeroportArrivee |
        dateDepart |
        dateArrive |
        classPassager |
        passagerAdulte |
        passagerEnfant |
        passagerBebe) {
        handleMyPromise();
        console.log('🟢 SUCCESS : Data OK')
    } else {
        console.log('🔴 ERROR : Data manquantes')
    }
})

//! Les promesses.

//? Les promesses.

//* fetch Data.

let fetchData = () => {
    return new Promise((resolve, reject) => {

        let url = 'https://jsonplaceholder.typicode.com/posts';

        const headers = new Headers();
        headers.append("Content-Type", "application/json; charset=UTF-8");
        headers.append("Accept", "application/json; charset=UTF-8");
        //headers.append("Authorization", `Bearer ${token}`);

        const body = JSON.stringify({
            typeDeVol,
            aeroportDepart,
            aeroportArrivee,
            dateDepart,
            dateArrive,
            classPassager,
            passagerAdulte,
            passagerEnfant,
            passagerBebe
        })

        const queryParameter = {
            method: "POST",
            headers: headers,
            body: body,
        };

        fetch(url, queryParameter)
            .then(res => {

                // console.log('⭐ CONSOLE ==> :', res);

                if (res.ok === true) {

                    return res.json()
                        .then((amadeusData) => {
                            console.log('🟢 SUCCESS ==> Les data :', amadeusData);
                        })
                        .then(() => {
                            resolve();
                        })

                } else if (res.ok === false) {

                    console.log('🔴 ERROR ==> Page non trouvée erreur :', res.status + res.statusText
                    );
                    reject();
                }
            })
    });
}

//* ------------------------------------------------

//? ------------------------------------------------

//? Résolution des promesses. 

const handleMyPromise = async () => {

    try {
        await fetchData();
    }
    catch (err) {
        console.log('🟠 CATCH ERROR : Résolution des promesses :', err);
    };

};

//? ------------------------------------------------- 
