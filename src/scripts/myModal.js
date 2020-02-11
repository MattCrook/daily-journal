const modal = ({ id, date, concepts, entry, mood }) => {
return `
<div class="modal" id="modal${id}">
<div class="log_blocks--${id}">
          <h1>${concepts}</h1>
          <h3>${date}</h3>
          <section>${entry}</section>
          <section id="${mood}">Feeling <strong>${mood}</strong></section>
          <section class="save-btn">
          <button id="editJournal--${id}" class="editBtn">Save Changes</button>
          <button class="close-modal" aria-label="close modal" data-close>✕</button>
          </section>
          </div>
          </div
`
};

export { modal as default }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
{/* <div class="modal" id="modal1">
  <div class="modal-dialog">
    <header class="modal-header">
      ...
      <button class="close-modal" aria-label="close modal" data-close>✕</button>
    </header>
    <section class="modal-content">...</section>
    <footer class="modal-footer">...</footer>
  </div>
</div> */}
