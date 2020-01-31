// Since we moved the code to this file, we should consider this file an independent, helper module now. It should not directly execute any logic for the application. The responsibility for how the application should operate should reside in src/scripts/journal.js now.
// The code in this module, then, should only define functionality for how to access the data, but should not immediately run it.


function checkParsed() {
  const url = "http://localhost:8088/entries";
  fetch(url)
    .then(resp => resp.json())
    .then(parsedEntries => {
      console.log(parsedEntries);
    });
}
checkParsed();
// quick check to ensure we are returning the correct array.

/*

// Creating new object to hold our methods we will call to execute main logic in journal.js.
const API = {
  getJournalEntries() {
    const url = "http://localhost:8088/entries";
    return fetch(url)
      .then(response => response.json())
      .then(entriesFromAPI => {
        entriesFromAPI.forEach(journalEntry => {
          const entryHTML = journalFactory(journalEntry);
          renderEntry(entryHTML);
        });
      });
  }
};
// Method can also be written as:
const API = {
  getJournalEntries: function() {
    return fetch("http://localhost:3000/entries").then(response =>
      response.json()
    );
  }
};
*/

// Refactor to use async await

async function getJournalEntries() {
  const url = "http://localhost:8088/entries";
  let response = await fetch(url); // The response returned by the fulfilled fetch() promise is assigned to the response variable when that response becomes available, and the parser pauses on this line until that occurs. Once the response is available, the parser moves to the next line,
  return await response.json();
};

// Old API fetch call:
/*
const getEntries = () => {
  const url = "http://localhost:8088/entries";
  fetch(url)
    .then(resp => resp.json())
    .then(entriesFromAPI => {
      entriesFromAPI.forEach(journalEntry => {
        const entryHTML = journalFactory(journalEntry);
        renderEntry(entryHTML);
      });
    });
};
*/
export { getJournalEntries as default }
