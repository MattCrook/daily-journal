import apiManager from "./api-manager.js";
import journalFactory from "./entryComponent.js";
import renderEntry from "./entriesDOM.js";
import modal from "./myModal.js";

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
      };
    });
  }
};

export default deleteJournalAction;









// openEls.forEach(el =>{
//   const modalId = el.dataset.open;
//   console.log(modalId);
//   console.log("modalid:", modalId);
//   console.log("openels:", openEls); // editJournal--#.open-modal
//   console.log("jurnaltoedit:", journalToEdit); //#id
//   document.getElementById(modalId  ).add(isVisible);
// });
// document.getElementById(journalToEdit).add(isVisible);
//const modalId = journalToEdit.dataset.open;
//journalToEdit.classList.add(isVisible);
//const modal = document.getElementById("");

//alert("clicked");

//updateJournalFields(journalToEdit);

// let createModal = (modalContent) => {
//   // Definitions
//   let modal = document.createElement("div"),
//       modalStyle = document.createElement("style"),
//       modalClose = '<button class="js-modal-close" id="js_modal_close">X</button>',
//       theBody = document.getElementsByTagName('body')[0],
//       theHead = document.getElementsByTagName('head')[0];

//   // Add content and attributes to the modal
//   modal.innerHTML = '<div class="js-modal-inner">' + modalContent + modalClose + '</div>';
//   theBody.appendChild(modal);

//   modalClose = document.querySelector("#js_modal_close");
