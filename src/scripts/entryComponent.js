// responsible for creating the journal entry HTML component
const journalFactory = ({ id, date, concepts, entry, mood }) => {
    return `
    <div class="log_blocks--${id}">
          <h1>${concepts}</h1>
          <h3>${date}</h3>
          <section>${entry}</section>
          <section id="${mood}">Feeling <strong>${mood}</strong></section>
          <section class="edit-delete-btns">
          <button id="editJournal--${id}" class="editBtn">Edit Entry</button>
          <button id="deleteJournal--${id}" class="deleteBtn">Delete Entry</button>
          </section>
          </div>
        `;
  };

  export { journalFactory as default }
