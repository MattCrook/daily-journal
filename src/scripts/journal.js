/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

API.getJournalEntries().then(renderEntry);


/*
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
