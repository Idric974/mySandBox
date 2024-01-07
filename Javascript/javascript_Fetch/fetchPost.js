console.log('TEST : fetchPost');

//! Paramètres.

// let url = 'https://api.github.com/users/xiaotian/repos';
//let postUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
let url = 'https://jsonplaceholder.typicode.com/posts';

const headers = new Headers();
headers.append("Content-Type", "application/json; charset=UTF-8");
headers.append("Accept", "application/json; charset=UTF-8");
//headers.append("Authorization", `Bearer ${token}`);

const body = JSON.stringify({
    firstName: 'Idric',
    lastName: 'Evarne'
})

const queryParameter = {
    method: "POST",
    headers: headers,
    body: body,
};

//! -------------------------------------------------

//! Les promesses.

let postPromise = () => {
    return new Promise((resolve, reject) => {

        fetch(url, queryParameter)
            .then(res => {

                console.log('⭐ CONSOLE ==> :', res);

                if (res.ok === true) {

                    return res.json()
                        .then((users) => {
                            console.log('🟢 SUCCESS ==> Data :', users);
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

let handlePostPromise = async () => {

    try {
        await postPromise();
    }
    catch (err) {
        console.log('❗❗ CATCH ==> handleMyPromise :', err);
    }
};

//handlePostPromise();

//! -------------------------------------------------







