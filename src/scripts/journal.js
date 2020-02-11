/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.*/

import apiManager from "./api-manager.js";
import journalFactory from "./entryComponent.js";
import recordJournalManager from "./journalManager.js";
import renderEntry from "./entriesDOM.js";
import radioFilter from "./radioButtons.js";
import deleteJournalAction from "./deleteButton.js";
import { editButtonAction } from "./editButton.js";


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
  editButtonAction();
}

init();

const myModalFunction = () => {
  const journalEntryContainer = document.querySelector(".entry_log");
  const openModals = document.querySelectorAll("[data-open]");
  openModals.forEach(trigger => {
    trigger.addEventListener("click", event => {
      if (openModals.classList) {
        openModals.classList.add("open");
      }
      event.preventDefault();
    });
  });
};
myModalFunction();

//   journalEntryContainer.addEventListener("click", event => {
// if (event.target.id.startsWith("editJournal--")) {
//   const journalToEdit = event.target.id.split("--")[1];
//   //console.log("journaltoedit:", journalToEdit); // id
//   // const isVisible = "is-visible";
//   // console.log(journalToEdit.);
//   openEls.forEach(trigger => {
//     trigger.addEventListener("click", event => {
//       if (modalWindow.classList) {
//         modalWindow.classList.add("open");
//       }

//       event.preventDefault();
//     });
//   });
//  }
// };
// myModalFunction();
