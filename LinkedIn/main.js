let waitFor = parseInt((Math.random() * (4 - 9) + 9) * 1000);

// let myMessageButtons = document.querySelectorAll('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view');
// console.log(myMessageButtons);

// Sélectionner le premier bouton "Message" trouvé dans le document
//var btnMessage = document.querySelector('a[data-tracking-control-name="send-message-to-connection"]');

// Sélectionner tous les boutons "Message" dans le document
var myMessageButtons = document.querySelectorAll('a[data-tracking-control-name="send-message-to-connection"]');
console.log(myMessageButtons);

myMessageButtons.forEach(button => {


    //? 1) Clic sur le bouton Message.

    const clickOnMessageButton = () => {
        return new Promise((resolve, reject) => {
            try {

                button.click();
                setTimeout(() => {
                    resolve(console.log('🟢 SUCCESS : Click on message button OK'));
                }, waitFor);

            } catch (error) {
                reject(console.log('🟠 TRY CATCH ERROR : my reject :', error));;
            }
        });
    };

    //? ------------------------------------------------- 

    //? 2) Recupérer le nom de la personne connectée.

    let userName;

    const getUserName = () => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                userName = document.getElementById('send-invite-modal').innerText.split('Invitez ')[1].split(' à rejoindre votre réseau')[0];

                if (userName) {

                    resolve(console.log('4️⃣ Prénom de la personne invitée ========>', userName));

                } else {

                    reject(console.log('🔺 Erreur : Prénom de la personne invitée :', error));
                }

            }, waitFor);

        });
    }

    //? -------------------------------------------------

    //? 3) Coller le message.

    let collerMessage = () => {

        let userName = document.getElementById('send-invite-modal').innerText.split('Invitez ')[1].split(' à rejoindre votre réseau')[0]

        console.log('Nom de la personne connctée :', userName);

        let myMessage = `🚀 Opportunité Unique pour les Aspirants Business Developers 🚀

                            Bonjour ${userName}, vous rêvez de façonner votre avenir, de construire des ponts entre des idées novatrices et des opportunités lucratives ? 
                            Alors, vous êtes au bon endroit !

                            🌟 Nous ouvrons nos portes à des individus audacieux, désireux de faire une différence et de se propulser vers le sommet dans le domaine passionnant du Business Development.

                            💡 Ce n'est pas juste un métier, c'est votre chance d'être en première ligne de l'innovation, de collaborer avec les meilleurs esprits du secteur et de marquer véritablement votre empreinte.

                            ➡️ Dépassez vos limites, donnez vie à vos idées. Cliquez sur le lien ci-dessous pour découvrir votre prochain défi : https://business-developer-formation.systeme.io/ae4621bc

                            ${userName} Le monde de demain a besoin de vous.

                            Idric Evarne.
                            `;

        console.log('Message invitation simple :', myMessage);

        return new Promise((resolve, reject) => {

            try {

                let noteTextBox = document.getElementById('custom-message');

                noteTextBox.value = myMessage;

                // console.log('Nouvelle valeur de la inputBox :', noteTextBox);

                noteTextBox.dispatchEvent(
                    new Event('input', {
                        bubbles: true,
                    })
                );

                setTimeout(() => {
                    resolve(console.log('🟢 SUCCESS : Message collé'));
                }, waitFor);


            } catch (error) {
                console.log('🟠 TRY CATCH ERROR : coller le message :', error);
                reject();
            }

        });
    }

    //? -------------------------------------------------

    //? 4) Envoyer le message.

    let sendMessage = () => {

        let mysendButtons = document.querySelectorAll('button');

        let myDoneButtons = Array.prototype.filter.call(mysendButtons, function (el) {
            return el.textContent.trim() === 'Envoyer';
        });

        return new Promise((resolve, reject) => {

            try {

                setTimeout(() => {

                    myDoneButtons[0].click();
                    resolve(console.log('🟢 SUCCESS : send Message OK'));

                }, waitFor);

            } catch (error) {
                console.log('send Message :', error);
                reject();
            }

        });
    }

    //? -------------------------------------------------

    //? Fermer la boite de message.

    const closeMessageBox = () => {

        let myCloseButton = document.getElementById('ember1473');

        return new Promise((resolve, reject) => {
            try {

                setTimeout(() => {
                    myCloseButton.click();
                    resolve(console.log('🟢 SUCCESS : Close button OK'));
                }, waitFor);

            } catch (error) {
                reject(console.log('🟠 TRY CATCH ERROR : Close button error :', error));;
            }
        });
    }

    //? -------------------------------------------------

    //? Temporisation.

    const temporisation = () => {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(console.log('🟢 SUCCESS : Temporisation OK'));
                }, timeout);

            } catch (error) {
                reject(console.log('🟠 TRY CATCH ERROR : Temporisation error:', error));;
            }
        });
    }

    //? Résolution des promesses. 

    const handleMyPromise = async () => {

        try {
            await clickOnMessageButton();
            await getUserName();
            await collerMessage();
            await sendMessage();
            await closeMessageBox();
            await temporisation();
        }
        catch (err) {
            console.log('🟠 CATCH ERROR : Résolution des promesses :', err);
        }
    };

    handleMyPromise();

    //? ------------------------------------------------- 

});





