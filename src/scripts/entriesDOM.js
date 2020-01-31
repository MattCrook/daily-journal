// function that renders data
  const renderEntry = entryHTML => {
    const entryLogContainer = document.querySelector(".entry_log");
    entryLogContainer.innerHTML += entryHTML;
  }

 export { renderEntry as default }
