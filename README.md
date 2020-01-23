## Additional Notes/ Comments
* entriesFromAPI is callback taking the return value of the fetch, being turned to Json.
* Which is our array, which we iterate with forEach, giving that a callback (journalEntry) to represent each iterator variable...or each single journal entry.
* We then create a variable that calls our factory function giving it the callback as an argument to execute rendering the html with the info returned.
* Our renderEntry function takes an argument which is not called until it is filled and turned into an argument with the return value of the fetch call.
* the renderEntry function only has the purpose of selecting or linking a place on the DOM to put our HTML.
* The entryHTML parameter is not used until the journalFactory function is called, where we save off that value, and use it as the argument for the renderEntry function...therefor rendering each journal entry according to our specifications on the DOM.
