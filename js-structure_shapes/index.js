import farbe from "./utils/randomColor.js";

console.clear();

const root = document.getElementById("root");

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  const randomColor = farbe();
  circle.style.backgroundColor = randomColor;
});

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  const randomColor = farbe();
  square.style.backgroundColor = randomColor;
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  const randomColor = farbe();
  pentagon.style.backgroundColor = randomColor;
});

root.append(circle, square, pentagon);
