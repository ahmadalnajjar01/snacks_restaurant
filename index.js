// //Q1

const info = [];
const items = [];

let userName = prompt("Enter your Name please :");
const parentElement = document.getElementById('parentDiv');
const newParagraph = document.createElement('p');
newParagraph.textContent = userName;
parentElement.appendChild(newParagraph);

info.push(userName);
let Gender;

while (true) {
  Gender = prompt("Enter Your Gender please:");
  if (Gender === "male" || Gender === "female") {
    break;
  } else {
    alert("Invalid input. Please enter 'male' or 'female'.");
  }
}
if (Gender === "male") {
  items.push(Gender);
  info.push(Gender);
  
} else if (Gender === "female") {
  info.push(Gender);
  items.push(Gender);
  
}

let orderChoice = prompt("Would you like to order shawarma, zinger, or burger");

items.push(orderChoice);
info.push(orderChoice);



  const orderedList = document.createElement('ol');


  for (let i = 0; i < items.length; i++) {
      const listItem = document.createElement('li'); 
      listItem.textContent = items[i]; 
      orderedList.appendChild(listItem); 
  }

  document.getElementById('list-container').appendChild(orderedList);

for (let i = 0; i < info.length; i++) {

  console.log(info[i]);

}
