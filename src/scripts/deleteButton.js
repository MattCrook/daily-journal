import apiManager from "./api-manager.js";
import journalFactory from "./entryComponent.js";
import renderEntry from "./entriesDOM.js";

const deleteJournalAction = {
  deleteButtonAction() {
    const journalEntryContainer = document.querySelector(".entry_log");
    journalEntryContainer.addEventListener("click", event => {
      if (event.target.id.startsWith("deleteJournal--")) {
        const entryToDelete = event.target.id.split("--")[1];
        apiManager
          .deleteJournal(entryToDelete)
          .then(apiManager.getJournal)
          .then(entriesFromAPI => {
            journalEntryContainer.innerHTML = "";
            entriesFromAPI.forEach(journalEntry => {
              const entryHTML = journalFactory(journalEntry);
              renderEntry(entryHTML);
            });
          });
      } else if (event.target.id.startsWith("editJournal--")) {
        const journalToEdit = event.target.id.split("--")[1];
        updateJournalFields(journalToEdit);
      }
    });
  }
};

export default deleteJournalAction;
