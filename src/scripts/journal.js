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

function journalEntry(date, concepts, entry, mood) {
    return {
      date,
      concepts,
      entry,
      mood,
    }
}
const firstJournalEntry = journalEntry("01.17.2020", "Objects and functions", "Learned the basics of objects, and working with functions as well as methods.", "motivated");
console.log(firstJournalEntry);
let journalEntriesArray = [];
journalEntriesArray.push(firstJournalEntry);
console.log(journalEntriesArray);


const secondJournalEntry = journalEntry("01.17.2020", "flexbox", "Worked with CSS to build better styling skills with flexbox.", "neutral");
journalEntriesArray.push(secondJournalEntry);
console.log(journalEntriesArray);
