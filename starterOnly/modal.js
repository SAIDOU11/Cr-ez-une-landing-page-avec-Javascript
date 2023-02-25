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

// Const
const closeModalBg = document.querySelector(".bground");
const closeBtn = document.querySelectorAll(".close");

// addEventListener on click & closeModal() close backgroung modal;
function closeModal() {
  closeModalBg.style.display = "none";
}

closeBtn[0].addEventListener("click", () => {
  return closeModal();
});

/* 
first
last
email
birthdate
quantity
*/
const registForm = document.getElementsByName("reserve");
console.log(registForm);

const emailAddress = document.getElementById("email");
console.log(emailAddress);

emailAddress.addEventListener("change", () => {
  validEmail(this);
});

const validEmail = (inputEmail) => {
  console.log(inputEmail["email"].value);
  //Création de l'expression régulière
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  // //Test de l'expression
  if (
    inputEmail["email"].value &&
    emailRegExp.test(inputEmail["email"].value)
  ) {
    alert("EMAIL VALIDE");
  } else {
    alert("NON VALIDE");
  }
};

// const firstName = document.getElementById("first");
// firstName.addEventListener("change", () => {
//   console.log();
// });

// const lastName = document.getElementById("last");
// console.log(lastName);
// const birthDate = document.getElementById("birthdate");
// console.log(birthDate);
// const quantity = document.getElementById("quantity");
// console.log(quantity);
