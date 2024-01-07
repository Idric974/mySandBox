function checkKeywordsInDoc() {
    // Authenticate and initialize the Google Docs API
    // const docs =  new GoogleAppsScript.Docs.DocsService();
    // docs.getDocument('1PLw5VtdWoITP03ULOIHLNZlrBFSN-6DPPV5_1bnURUI');

    var docs = DocumentApp.openById('1PLw5VtdWoITP03ULOIHLNZlrBFSN-6DPPV5_1bnURUI');

    const docContent = docs.getBody().getText();

    // Get the data from the Google Sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    const sheetData = sheet.getDataRange().getValues();
    for (var i = 0; i < sheetData.length; i++) {
        var keyword = sheetData[i][0];
        var row = i + 1;
        // Check if the keyword is present in the doc content
        if (docContent.search(keyword) !== -1) {
            sheet.getRange(row, 2).setValue("OK");
        } else {
            sheet.getRange(row, 2).setValue("");
        }
    }
}
