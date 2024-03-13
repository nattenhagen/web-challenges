console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');

const toastMessages = document.getElement(
  '[data-js="toast-container__message"]'
);

addButton.addEventListener("click", () => {
  const newListElement = document.createElement("li");

  // Exercise: Append a new entry to the toast messages container
});

const clearButton = document.querySelector('[data-js="clear-button"]');

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
});
