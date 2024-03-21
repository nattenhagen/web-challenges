console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

async function getUser(url) {
  const response = await fetch(url);
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  try {
    const json = await response.json();
    errorElement.textContent = "";
    return json.data;
  } catch (error) {
    errorElement.textContent = "Error: " + error.message;
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try {
      errorElement.textContent = "";
      const user = await getUser(event.target.dataset.url);
      userElement.innerHTML = `
      <h2>${user.first_name} ${user.last_name}</h2>
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
      `;
    } catch {
      userElement.innerHTML = "User doesn't exisit!.";
    }
  })
);
