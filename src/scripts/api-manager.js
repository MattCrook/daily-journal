//Promise( (resolve, reject) => { //callback function})

// Since we moved the code to this file, we should consider this file an independent, helper module now. It should not directly execute any logic for the application. The responsibility for how the application should operate should reside in src/scripts/journal.js now.
// The code in this module, then, should only define functionality for how to access the data, but should not immediately run it.

// The response returned by the fulfilled fetch() promise is assigned to the response variable when that response becomes available, and the parser pauses on this line until that occurs. Once the response is available, the parser moves to the next line,

const apiManager = {
  async getJournal() {
    const response = await fetch(`http://localhost:8088/entries/`);
    return await response.json();
  },
  postDataJournal(journalObj) {
    return fetch("http://localhost:8088/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(journalObj)
    });
  },
  updateJournal (journalId, journalEntry) {
    return fetch(`http://localhost:8088/entries/${journalId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(journalEntry)
    });
  },
  async deleteJournal(journalEntry) {
    const response = await fetch(`http://localhost:8088/entries/${journalEntry}`, {
      method: "DELETE"
    });
    return await response.json();
  },
};

export default apiManager;
