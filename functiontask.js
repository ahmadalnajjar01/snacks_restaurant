// //EX1
// // Ask the user for their name
// let userName = prompt("Please enter your name:");

// // Ask the user for their gender
// let userGender = prompt("Please enter your gender (male or female):");

// // Welcome message

// while (true) {
//   if (userGender == "male" || userGender == "female") {
//     break;
//   }
//   userGender = prompt("Please enter your gender (male or female):");
// }
// if (userGender === "male") {
//   alert(`Welcome Mr. ${userName}`);
// } else if (userGender === "female") {
//   alert(`Welcome Ms. ${userName}`);
// }
// // Ask the user for their order choice
// let orderChoice = prompt(
//   "Would you like to order shawarma, zenger, or burger?"
// );

// // Ask the user to write the name of their order
// let orderName = prompt("Please write the name of your order:");

// // Alert order preparation message
// alert(`Your order of ${orderName} is getting prepared.`);

// // Log the user name and order to the console
// console.log(`User: ${userName}, Order: ${orderName}`);

// // Ask the user to enter a number
// let userNumber = parseInt(prompt("Please enter a number between 1 and 9:"));

// // Check the number and display corresponding message
// switch (userNumber) {
//   case 1:
//     alert("ONE");
//     break;
//   case 2:
//     alert("TWO");
//     break;
//   case 3:
//     alert("THREE");
//     break;
//   case 4:
//     alert("FOUR");
//     break;
//   case 5:
//     alert("FIVE");
//     break;
//   case 6:
//     alert("SIX");
//     break;
//   case 7:
//     alert("SEVEN");
//     break;
//   case 8:
//     alert("EIGHT");
//     break;
//   case 9:
//     alert("NINE");
//     break;
//   default:
//     alert("PLEASE TRY AGAIN");
// }

// // Q1: Use a loop to display the numbers 0 through 5, each in a separate alert window
// for (let i = 0; i <= 5; i++) {
//   alert(i);
// }

// // Q4: Prompt the user for a number in the range 0…100 until valid
// let validNumber;
// while (true) {
//   validNumber = parseInt(prompt("Please enter a number between 0 and 100:"));
//   if (validNumber >= 0 && validNumber <= 100) {
//     break;
//   } else {
//     alert("Error: Please enter a number in the range 0…100.");
//   }
// }

// // Q5: Prompt for an integer, then display the sum of the integers from 0 through the number entered
// let userInput = parseInt(prompt("Please enter an integer:"));
// let sum = 0;
// for (let i = 0; i <= userInput; i++) {
//   sum += i;
// }
// alert(`The sum of integers from 0 to ${userInput} is ${sum}.`);

// Write a JavaScript function that reverses a number.
let array = [5, 3, 2, 4, 4, 3];
let newArr = [];

function reverse() {
  for (let i = 6; i >= 1; i--) {
    let test = array.pop();
    newArr.push(test);
  }
  console.log(newArr);
}
reverse();

// Use a loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the console.
let numarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function EvenOdd() {
  for (let i = 0; i <= 15; i++) {
    let num = numarray.pop();
    if (num % 2 == 0) console.log(num + " " + "the num is even");
    else console.log(num + " " + "the num is odd");
  }
}

EvenOdd();

// Write a function that returns a string that has letters in alphabetical order.
function sortOrange() {
  let word = "orange";
  let chars = ["o", "r", "a", "n", "g", "e"]; // Manually store characters

  // Simple sorting logic
  for (let i = 0; i < chars.length; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      if (chars[i] > chars[j]) {
        // Swap if out of order
        let temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
      }
    }
  }

  // Combine sorted characters into a string
  let sortedWord = "";
  for (let i = 0; i < chars.length; i++) {
    sortedWord += chars[i];
  }

  return sortedWord;
}

console.log(sortOrange()); // Output: "Oaegnr"
