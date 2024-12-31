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
const parentelemet = document.getElementById("parentid");
const newp = document.createElement("p");
newp.textContent = userName;
parentelemet.appendChild(newp);

userGender = askGender();
const parentelemet1 = document.getElementById("parentid");
const newp1 = document.createElement("p");
newp1.textContent = userGender;
parentelemet1.appendChild(newp1);
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
const parentelemet2 = document.getElementById("parentid");
const newp2 = document.createElement("p");
newp2.textContent = userOrder;
parentelemet2.appendChild(newp2);
