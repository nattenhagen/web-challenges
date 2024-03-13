console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  console.log(formElements);
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  event.target.reset(); // resets the form
  formElements.firstName.focus(); // puts focus on First name
  console.log(formElements.firstName.value);
});
