const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function automateMessaging() {
    const elements = Array.from(document.querySelectorAll('div.scaffold-finite-scroll__content li'));

    for (let i = 0; i < elements.length; i++) {
        const elem = elements[i];

        // Cliquer sur le bouton Message
        let messageButton = elem.querySelector('button[name="Message"]');
        if (messageButton) messageButton.click();

        // Attendre 2 secondes
        await delay(2000);

        // Coller le message : Salut toi
        let inputField = document.querySelector('input[name="message"]');
        if (inputField) inputField.value = "Merci d'avoir rejoint mon réseau";

        // Attendre 2 secondes
        await delay(2000);

        // Cliquer sur le bouton Envoyer
        let sendButton = document.querySelector('button[name="Envoyer"]');
        if (sendButton) sendButton.click();

        // Attendre 2 secondes
        await delay(2000);

        // Cliquer sur le bouton pour fermer la messagerie
        let closeButton = document.querySelector('button[name="Fermer"]');
        if (closeButton) closeButton.click();

        // Attendre 2 secondes
        await delay(2000);
    }
}

automateMessaging();
