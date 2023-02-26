function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Const modal & close modal button
const closeModalBg = document.querySelector(".bground");
const closeBtn = document.querySelectorAll(".close");

// addEventListener on click & closeModal() close backgroung modal;
function closeModal() {
  closeModalBg.style.display = "none";
}

closeBtn[0].addEventListener("click", () => {
  return closeModal();
});

// const birthMessage = document.getElementById("birth-Message");

// const registForm = document.getElementsByName("reserve");
// console.log(registForm);

// const birthDate = document.getElementById("birthdate");
// console.log(birthDate);

// const quantity = document.getElementById("quantity");
// console.log(quantity);
