let userName = "";
let userGender = "";
let userOrder = "";
let userAnswers = [];

function askGender() {
  let gender = prompt("Enter your gender (male/female):").toLowerCase();
  while (gender !== "male" && gender !== "female") {
    gender = prompt(
      "Invalid input. Please enter your gender (male/female):"
    ).toLowerCase();
  }
  return gender;
}
userName = prompt("Enter your name:") || "Guest";
userGender = askGender();
let title = userGender === "male" ? "Mr." : "Ms.";
userAnswers.push(userName, userGender);
alert(`Welcome ${title} ${userName}`);
userOrder =
  prompt("What would you like to order? (shawarma, zenger, burger)") ||
  "nothing";
alert(`Your ${userOrder} is being prepared!`);
console.log(`${userName} ordered ${userOrder}`);
userAnswers.push(userOrder);
console.log("User details:");
for (let i = 0; i < userAnswers.length; i++) {
  console.log(userAnswers[i]);
}

// Ask the user to enter a number
let userNumber = parseInt(prompt("Please enter a number between 1 and 9:"));

// Check the number and display corresponding message
switch (userNumber) {
  case 1:
    alert("ONE");
    break;
  case 2:
    alert("TWO");
    break;
  case 3:
    alert("THREE");
    break;
  case 4:
    alert("FOUR");
    break;
  case 5:
    alert("FIVE");
    break;
  case 6:
    alert("SIX");
    break;
  case 7:
    alert("SEVEN");
    break;
  case 8:
    alert("EIGHT");
    break;
  case 9:
    alert("NINE");
    break;
  default:
    alert("PLEASE TRY AGAIN");
}

// Q1: Use a loop to display the numbers 0 through 5, each in a separate alert window
for (let i = 0; i <= 5; i++) {
  alert(i);
}

// Q4: Prompt the user for a number in the range 0…100 until valid
let validNumber;
while (true) {
  validNumber = parseInt(prompt("Please enter a number between 0 and 100:"));
  if (validNumber >= 0 && validNumber <= 100) {
    break;
  } else {
    alert("Error: Please enter a number in the range 0…100.");
  }
}

// Q5: Prompt for an integer, then display the sum of the integers from 0 through the number entered
let userInput = parseInt(prompt("Please enter an integer:"));
let sum = 0;
for (let i = 0; i <= userInput; i++) {
  sum += i;
}
alert(`The sum of integers from 0 to ${userInput} is ${sum}.`);
