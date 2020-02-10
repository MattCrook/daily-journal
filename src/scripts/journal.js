/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.*/

import apiManager from "./api-manager.js";
import journalFactory from "./entryComponent.js";
import recordJournalManager from "./journalManager.js";
import renderEntry from "./entriesDOM.js";
import radioFilter from "./radioButtons.js";
import deleteJournalAction from "./deleteButton.js";


// import renderEntry from "./entriesDOM.js"

// Calling getJournalEntries to executed main logic.
//API.getJournalEntries().then(renderEntry);

// Executing the refactored async function. Using async await cuts the code needed to write in half!
// checkParsed();

function init() {
  apiManager.getJournal().then(entriesFromAPI => {
    entriesFromAPI.forEach(journalEntry => {
      const entryHTML = journalFactory(journalEntry);
      renderEntry(entryHTML);
    });
  });
  recordJournalManager.recordJournalEvent();
  radioFilter.getRadioButton();
  deleteJournalAction.deleteButtonAction();
};

init();
