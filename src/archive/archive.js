// first entry:
/*
const journalEntry = {
  date: "01.17.2020",
  concepts: "Objects and functions",
  entry:
    "Learned the basics of objects, and working with functions as well as methods.",
  mood: "motivated"
};


const firstJournalEntry = [];
firstJournalEntry.push(journalEntry);
console.log(firstJournalEntry);

const journalEntry = (date, concepts, entry, mood) => {
  return {
    date: date,
    concepts: concepts,
    entry: entry,
    mood: mood
  };
}



function journalEntry(date, concepts, entry, mood) {
    return {
      date,
      concepts,
      entry,
      mood,
    }
}

const firstJournalEntry = journalEntry(new Date(), "Objects and functions", "Learned the basics of objects, and working with functions as well as methods.", "motivated");
console.log(firstJournalEntry);
let journalEntries = [];
journalEntries.push(firstJournalEntry);
// console.log(journalEntries);


const secondJournalEntry = journalEntry(new Date(), "flexbox", "Worked with CSS to build better styling skills with flexbox.", "neutral");
journalEntries.push(secondJournalEntry);
console.log(journalEntries);
*/

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
/*

// Creating new object to hold our methods we will call to execute main logic in journal.js.
// on data.js:
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






//ADDING THE RADIO BUTTON JOURNAL 8 DRAFTS
/*
  const entryLogContainer = document.querySelector("entry_log");
  console.log("entryLogContainer:", entryLogContainer);
  entryLogContainer.innerHTML = "";

  const entryLogValue = mood.
  console.log("entryLogValue:", entryLogValue);
  //entryLogContainer.innerHTML = "";
  entriesFromAPI.filter((entry) => {
      console.log("entry:", entry);
  });

  if (entriesFromAPI.mood === entryLogValue) {
    entriesFromAPI.filter(entries => {
      entries.forEach(filteredByMoodArray => {
        const filteredEntryHML = journalFactory(filteredByMoodArray);
        renderEntry(filteredEntryHML);



  renderRadioSelection() {
    apiManager.getJournal().then(entriesFromAPI => {
      const entryLogContainer = document.querySelector(".entry_log");
      const entryLogValue = document.querySelector(".entry_log").value;
      entryLogContainer.innerHTML = "";
      if (this.radioButtonValue === entryLogValue) {
        entriesFromAPI.filter(entries => {
          entries.forEach(filteredByMoodArray => {
            const filteredEntryHML = journalFactory(filteredByMoodArray);
            renderEntry(filteredEntryHML);
          });
        });
      }
    });
  }
};

const radioFilter = {
  // object holding method to call once event is triggered
  getRadioButton() {
    const radioButton = document.getElementsByName("mood-of-day");
    radioButton.forEach(mood => {
      mood.addEventListener("click", event => {
        event.preventDefault();
        const radioButtonValue = event.target.value;
        const entryLogValue = document.querySelector(".entry_log").value;
        if (radioButtonValue === entryLogValue) {
            .then((response) => {
          apiManager.getJournal().then(entriesFromAPI => {
            const entryLogContainer = document.querySelector(".entry_log");
            entryLogContainer.innerHTML = "";
            entriesFromAPI.filter(entries => {
              entries.forEach(filteredByMoodArray => {
                const filteredEntryHML = journalFactory(filteredByMoodArray);
                renderEntry(filteredEntryHML);
              });
            });
          });
        })
    }
      });
    });
  }
};
*/
