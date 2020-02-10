import apiManager from "./api-manager.js";

function editButtonAction() {
  const journalEntryContainer = document.querySelector(".entry_log");
  journalEntryContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("editJournal--")) {
      const journalToEdit = event.target.id.split("--")[1];
      updateJournalFields(journalToEdit);
    }
  });
}

function saveButtonAfterEdit() {
  const hiddenJournalId = document.querySelector("#journalId").nodeValue;
  if (hiddenJournalId !== "") {
    updateJournal(journalId);
  }
}
function updateJournalFields(journalId) {
  const hiddenJournalId = document.querySelector("#journalId").nodeValue;
  console.log(hiddenJournalId);
  const journalDateInput = document.querySelector("journalDate").nodeValue;
  const journalConceptsInput = document.getElementById("concepts").value;
  const journalEntryInput = document.getElementById("journalEntry").value;
  const journalMoodInput = document.getElementById("mood").value;

  fetch(`http://localhost:8088/recipes/${journalId}`)
    .then(response => response.json())
    .then(response => {});
}
