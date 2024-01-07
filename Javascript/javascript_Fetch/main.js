let submitBotton = document.getElementById('myFrom')

submitBotton.addEventListener('click', () => {

    //! les fonctions. 

    //? Capture des données du formulaire.

    let firstName;
    let lastName;
    let email;
    let phone;
    let msg;

    let myForm = document.querySelector('#myForm');
    myForm.firstName

    let getFormData = () => {



        firstName = document.getElementById('firstName').value;
        lastName = document.getElementById('lastName').value;
        email = document.getElementById('email').value;
        phone = document.getElementById('phone').value;
        msg = document.getElementById('phone').value;

        return new Promise((resolve, reject) => {
            if (firstName && lastName && email && phone && msg) {

                console.log('firstName :', firstName);
                console.log('lastName :', lastName);
                console.log('email :', email);
                console.log('phone :', phone);
                console.log('msg :', msg);

                resolve();
            } else {
                console.log('Test myPromise Pas OK');
                reject();
            }
        });
    }

    //? ---------------------------------------------

    //? Post des data vers le back.

    let postPromise = () => {

        let url = 'http://localhost:3000/api/users/createUser/';

        const headers = new Headers();
        headers.append("Content-Type", "application/json; charset=UTF-8");
        headers.append("Accept", "application/json; charset=UTF-8");
        //headers.append("Authorization", `Bearer ${token}`);

        const body = JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            msg,
        })

        console.log('body :', body);

        const queryParameter = {
            method: "POST",
            headers: headers,
            body: body,
        };

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

                        console.log('🔴 ERROR ==> Page non trouvée erreur :', res.status + ' ' + res.statusText
                        );

                        reject();
                    }
                })

        });
    }

    //? ---------------------------------------------

    //! -------------------------------------------------

    //! Résolution des promesses.


    let handleMyPromise = async () => {

        try {
            await getFormData();
            await postPromise();
        }
        catch (err) {
            console.log('err :', err);
        }
    };

    handleMyPromise();

    //! ---------------------------------------------


})