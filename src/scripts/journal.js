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
*/
const journalEntries = [
  {
    date: new Date(),
    concepts: "Objects and functions",
    entry:
      "Learned the basics of objects, and working with functions as well as methods.",
    mood: "motivated"
  },
  {
    date: new Date(),
    concepts: "flexbox",
    entry: "Worked with CSS to build better styling skills with flexbox.",
    mood: "neutral"
  }
];
/*
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

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML
    Arguments: journalEntry (object)
*/
journalEntries.forEach(journalEntry => {
  const entryLogContainer = document.querySelector(".entryLog");
  entryLogContainer.innerHTML += makeJournalEntryComponent(journalEntry);
});

function makeJournalEntryComponent(journalEntry) {  // can also use destructuring
  // can also use destructuring
  return `
    <h1>${journalEntry.concepts}</h1>
    <h3>${journalEntry.date}</h3>
    <section>${journalEntry.entry}</section>
    <section>${journalEntry.mood}</section>
  `;
}


/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)

const renderJournalEntries = (entries) => {

}

// Invoke the render function
renderJournalEntries(journalEntries)
*/
