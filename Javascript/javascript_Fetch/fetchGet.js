console.log('TEST : fetchGet');


// let url = 'https://api.github.com/users/xiaotian/repos';
// let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
let url = 'https://jsonplaceholder.typicode.com/users';

const headers = new Headers();
headers.append("Content-Type", "application/json; charset=UTF-8");
headers.append("Accept", "application/json; charset=UTF-8");
//headers.append("Authorization", `Bearer ${token}`);

const queryParameter = {
    method: "GET",
    headers: headers,

};

//! Les promesses.

let myPromise = () => {
    return new Promise((resolve, reject) => {

        fetch(url, queryParameter)
            .then(res => {

                console.log('⭐ CONSOLE ==> :', res);

                if (res.ok === true) {

                    res.json()
                        .then((data) => {
                            console.log('🟢 SUCCESS ==> Data :', data);
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

//! -------------------------------------------------

//! Résolution des promesses.

let handleMyPromise = async () => {

    try {
        await myPromise();
    }
    catch (err) {
        console.log('❗❗ CATCH ==> handleMyPromise :', err);
    }
};

handleMyPromise();

//! -------------------------------------------------







