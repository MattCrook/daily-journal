//event listener on edit button
export function editButtonAction() {
  const journalEntryContainer = document.querySelector(".entry_log"); // reference to container for all entries
  journalEntryContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("editJournal--")) {  // targetting specific id's
      const journalToEditId = event.target.id.split("--")[1]; // no have ref to specific journalId
      populateJournalFields(journalToEditId); // calling function below with the specific ID
    }
  });
}

// event listener on save button, after user edits the journal
// using PUT call to update the API with changes. Added a check in jounralManger.js to check initially if the entry feild has a hidden value. If it does, then the user is editing.
// if it doesn't then it is a new load, or freshly loaded page.
const populateJournalFields = journalId => {
  const hiddenJournalId = document.querySelector("#journalId");
  const journalDateInput = document.querySelector("journalDate");
  const journalConceptsInput = document.getElementById("concepts");
  const journalEntryInput = document.getElementById("journalEntry");
  const journalMoodInput = document.getElementById("mood");

  fetch(`http://localhost:8088/entries/${journalId}`) // promise response, for put call. Buuilding the object by assigning values. These values are what will fill the entry fields, until the user makes an edit. When the user hits submit, it fires the PUT call.
    .then(response => response.json())
    .then(response => {
      hiddenJournalId.value = response.id;
      journalDateInput.value = response.journalDate;
      journalConceptsInput.value = response.concepts;
      journalEntryInput.value = response.journalEntry;
      journalMoodInput.value = response.mood;
    })
    .catch(err => console.log(err));
};




/*
Add edit button to journal entry
Add hidden input field to form to store id value of edited entry
Add event listener to button. Give unique id which includes id property of entry
When clicked, get the individual entry and populate the form fields with text content.
When user clicks the save button, determine if editing or creating (does hidden input field have a value?)
If editing, perform a PUT request to the API
Get all entries and display again

Have an event handler on some affordance for a user to edit a particular resource
Get the corresponding resource from the API
Render a form to the DOM with input fields
Populate input fields in the DOM to represent the current state of the resource
Have an event handler on a button to allow the user to save changes
Collect the user input from the DOM
Send a request to the API to update the correct resource
Redirect the user to either a list view, or a detail view of the resource s/he just modified
*/
