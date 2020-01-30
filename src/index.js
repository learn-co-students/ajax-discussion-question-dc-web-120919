const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  let newPersonButton = document.getElementsByTagName('button')[0];

  newPersonButton.addEventListener('click', pressButton())

});


function fetchPerson(){

  return fetch('https://randomuser.me/api/')
    .then(response => response.json());
}

function pressButton(){
  alert("You've pressed the button!");
}