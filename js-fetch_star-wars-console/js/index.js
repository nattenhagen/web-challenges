console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);

  const data = await response.json();

  // Log the entire data object
  console.log(data);

  // Log different values of the data object
  console.log(data.count);
  console.log(data.results);

  // Bonus: Find R2-D2 and log its eye color
  const r2d2 = data.results.find((character) => character.name === "R2-D2");
  {
    console.log("Eye color of R2-D2:", r2d2.eye_color);
  }
}

// Call the fetchData function
fetchData();
