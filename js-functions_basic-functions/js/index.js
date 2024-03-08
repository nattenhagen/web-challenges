console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--

const title = "title";
const author = "author";
const rating = 5;
const numberSales = 4;
const Increaseby2 = numberSales + 1;
const Increaseby4 = Increaseby2 + 1;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

// --^-- console.log(title);console.log(author);console.log(rating);console.log(numberSales);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

function logBookData() {
  console.log(title);
  console.log(author);
  console.log(rating);
  console.log(numberSales);
}

logBookData();

function logBookDataIncreaseby2() {
  console.log(title);
  console.log(author);
  console.log(rating);
  console.log(Increaseby2);
}

logBookDataIncreaseby2();

function logBookDataIncreaseby4() {
  console.log(title);
  console.log(author);
  console.log(rating);
  console.log(Increaseby4);
}

logBookDataIncreaseby4();

// --^-- write your code here --^--
