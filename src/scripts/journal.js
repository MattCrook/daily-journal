// entriesFromAPI is callback taking the return value of the fetch, being turned to json. Which is our array, which we iterate with forEach, giving that a callback (journalEntry) to represent each iterator vairable or each single journal entry. We then create a variable that calls our factory function giing it the callback as an argument to execute rendering the html with the info returned.

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

const journalFactory = ({ date, concepts, entry, mood }) => {
  return `
  <div class="log_blocks">
        <h1>${concepts}</h1>
        <h3>${date}</h3>
        <section>${entry}</section>
        <section>${mood}</section>
        </div>
      `;
};

const renderEntry = entryHTML => {
  const entryLogContainer = document.querySelector(".entry_log");
  entryLogContainer.innerHTML += entryHTML;
};

getEntries();
