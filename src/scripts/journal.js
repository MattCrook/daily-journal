/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

// Calling getJournalEntries to executed main logic.
API.getJournalEntries().then(renderEntry);

// Executing the refactored async function. Using async await cuts the code needed to write in half!
getJournalEntries().then((entriesFromAPI) => {
    entriesFromAPI.forEach((journalEntry) => {
        const entryHTML = journalFactory(journalEntry);
        renderEntry(entryHTML);
    });
});
