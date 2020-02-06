// function that renders data
import radioFilter from "./radioButtons.js"

const renderEntry = entryHTML => {
  const entryLogContainer = document.querySelector(".entry_log");
  entryLogContainer.innerHTML += entryHTML;
};

export { renderEntry as default };
