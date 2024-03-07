console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "h4x0r133";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied");
}

// Part 2: Even / Odd
const number = 3;

if (number % 2) {
  console.log("odd number");
} else {
  console.log("even number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 200;

if (numberOfHotdogs < 5) {
  console.log(2);
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log(1.5);
} else if (numberOfHotdogs >= 100 && numberOfHotdogs <= 1000000) {
  console.log(1);
} else {
  console.log(0.1);
}

// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
