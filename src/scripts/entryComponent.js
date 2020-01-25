// responsible for creating the journal entry HTML component

const journalFactory = ({ date, concepts, entry, mood }) => {
    return `
    <div class="log_blocks">
          <h1>${concepts}</h1>
          <h3>${date}</h3>
          <section>${entry}</section>
          <section>Feeling <strong>${mood}</strong></section>
          </div>
        `;
  };
