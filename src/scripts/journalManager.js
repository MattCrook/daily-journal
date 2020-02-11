import apiManager from "./api-manager.js";
import journalFactory from "./entryComponent.js";
import renderEntry from "./entriesDOM.js";

// responsible for initial load of the page. This module fetches data from API to render entries to page.
// recordJournalEvent is event listener on submit button

const recordJournalManager = {
  recordJournalEvent() {
    document
      .querySelector('input[type="submit"]')
      .addEventListener("click", event => {
        event.preventDefault();

        const date = document.getElementById("journalDate").value;
        const concepts = document.getElementById("concepts").value;
        const entry = document.getElementById("journalEntry").value;
        const mood = document.getElementById("mood").value;
        // define structure of object to be put in API
        const journalObject = { date, concepts, entry, mood };
        // promise for POST request...then() blowing away and reloading page with updated version
        const hiddenJournalId = document.querySelector("#journalId").value;
        if (hiddenJournalId !== "") {
          apiManager
            .updateJournal(hiddenJournalId, journalObject)
            .then(response => {
              apiManager.getJournal().then(entriesFromAPI => {
                const entryLogContainer = document.querySelector(".entry_log");
                entryLogContainer.innerHTML = "";
                entriesFromAPI.forEach(journalEntry => {
                  const entryHTML = journalFactory(journalEntry);
                  renderEntry(entryHTML);
                });
              });
            })
            .catch(err => console.log({ err }));
        } else {
          apiManager
            .postDataJournal(journalObject)
            .then(response => {
              //console.log("response: ", response);
              apiManager.getJournal().then(entriesFromAPI => {
                const entryLogContainer = document.querySelector(".entry_log");
                entryLogContainer.innerHTML = "";
                entriesFromAPI.forEach(journalEntry => {
                  const entryHTML = journalFactory(journalEntry);
                  renderEntry(entryHTML);
                });
              });
            })
            .catch(err => console.log({ err }));
        }
      });
  }
};

export default recordJournalManager;
