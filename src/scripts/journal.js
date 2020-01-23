const getEntries = () => {
  const url = "http://localhost:3000/entries";
  fetch(url)
    .then(resp => resp.json())
    .then(entriesFromAPI => {
      // entriesFromAPI is callback taking the return value of the fetch, being turned to json. Which is our array. Calling renderEntries with the the array of objects.
      renderEntry(entriesFromAPI);
    });
};

const journalFactory = ({ date, concepts, entry, mood })=> {
  // can also use destructuring. Creating our format of HTML.
  return `
      <article id="entry_log>
        <h1>${concepts}</h1>
        <h3>${date}</h3>
        <section>${entry}</section>
        <section>${mood}</section>
        </article>
      `;
};

const renderEntry = journalEntry => {
  const entryLogContainer = document.querySelector("#entry_log");
  journalEntry.forEach(journalEntry => {
    const entryHTML= journalFactory(journalEntry);
    entryLogContainer.innerHTML += entryHTML;
  });
};
