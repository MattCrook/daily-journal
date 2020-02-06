import apiManager from "./api-manager.js";
import journalFactory from "./entryComponent.js";
import renderEntry from "./entriesDOM.js";

const radioFilter = {
  getRadioButton() {
    const radioButton = document.getElementsByName("mood-of-day");
    radioButton.forEach(radioButton => {
      radioButton.addEventListener("input", event => {
        event.preventDefault();
        const radioButtonValue = event.target.value;
        try {
          apiManager.getJournal().then(entriesFromAPI => {
            const filteredValues = entriesFromAPI.filter(entry => {  // or one liner .filter((entry) => condition === entry.property)
              return radioButtonValue === entry.mood; // filter always evaluates to a boolean, so returning a boolean here
            });
            if (filteredValues.length >= 1) {
              const entryLogContainer = document.querySelector(".entry_log");
              entryLogContainer.innerHTML = "";
              filteredValues.forEach(entry => {
                const filteredEntryHTML = journalFactory(entry);
                renderEntry(filteredEntryHTML);
              });
            } else {
              console.log("No Matches!");
            }
          });
        } catch {
          err => console.log({ err });
        }
      });
    });
  }
};

export default radioFilter;

// PRE PLANNING SUDO INSTRUCTIONS AND PREP FOR WHAT NEEDS TO HAPPEN
/*
grab reference to radio button
each radio option needs to have an event listener
when one is clicked then only the corresponding ones should appear
use the document.getElementsByName() method, and a forEach() to add them more dynamically.
To get the selected mood, you need to look at the value property of the radio button that was clicked.
When you click on any DOM element, that element becomes the target of the click event.
Once you have successfully retrieved the value (happy, sad etc),
filter all of the journal entries.
 invoke the getJournalEntries() method on your data manager object - which will get all entries
then use the filter() array method to extract only the entries that have the same mood as the one the user clicked on.
Once you have filtered the entries by mood:
invoke the function that renders the HTML representations to the DOM and pass it the filtered array of entries.
*/

//LINE BY LINE DESCRIPTION
/*
object holding method to call once event is triggered
Entire getRadioButton function is adding click event to each radio button with forEach loop. And getting radio button value. Then checking match to render matches to DOM.
function gets a ref to buttons by name, and adds click handler that grabs value of buttons, and checks it against id for a match.
getting ref to the radio button names
doing a forEach loop to add the ref to buttons dynamically
grabbing ref to the value of each button (iv set unique vals to each one)
receiving the promise from API. Holds the json objects of journal entries
grabbing ref to section where journals are rendered
grabbing the value of the this section (looking for mood descriptors)
check against button val and entry log val (ex "happy" and looking for anything with mood: "happy")
if moods match filtered json objects, returning new array
loops thru new array
uses the function factory to give output html structure to the new array of filtered objects
renders objects to DOM
*/
