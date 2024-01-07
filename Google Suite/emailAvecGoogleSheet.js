//! Lien de la vidéo : https://www.youtube.com/watch?v=U_r0MGtgZys

function generateInvitationPDFs() {
    //* Obtenir la feuille active
    var sheet = SpreadsheetApp.getActiveSheet();

    //* Obtenir la plage de données pour la feuille
    var dataRange = sheet.getDataRange();

    //* Obtenir les valeurs de la feuille
    var data = dataRange.getValues();

    //* Boucle sur chaque ligne de la feuille
    for (var i = 1; i < data.length; i++) {

        //* Obtenir la ligne actuelle
        var row = data[i];

        //* Obtenez le prénom, le nom, l'heure, le lien de zoom et l'e-mail
        var firstName = row[0];
        var lastName = row[1];
        var time = row[2];
        var zoomLink = row[3];
        var email = row[4];

        //* Faire une copie du modèle de document
        var docId = DriveApp.getFileById("ID of Doc Template").makeCopy("Invitation from Learning Orbis").getId();
        var doc = DocumentApp.openById(docId);

        //* Remplacez les espaces réservés dans le document par les valeurs appropriées
        doc.getBody().replaceText("{{First}}", firstName);
        doc.getBody().replaceText("{{Last}}", lastName);
        doc.getBody().replaceText("{{Meeting Time}}", time);
        doc.getBody().replaceText("{{Zoom Link}}", zoomLink);
        doc.getBody().replaceText("{{Today}}", new Date().toLocaleDateString());
        doc.saveAndClose()

        //* Enregistrez le document au format PDF
        var pdf = doc.getAs("application/pdf");

        //* Envoyer le PDF en pièce jointe
        GmailApp.sendEmail(email, "Invitation from Learning Orbis", "", {
            attachments: [pdf]
        });

        //* Supprimer le document temporaire
        DriveApp.getFileById(docId).setTrashed(true);
    }
}