import apiManager from "./api-manager.js";
import journalFactory from "./entryComponent.js"
import renderEntry from "./entriesDOM.js"

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

        const journalObject = { date, concepts, entry, mood };
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
      });
  }
};

export default recordJournalManager;
