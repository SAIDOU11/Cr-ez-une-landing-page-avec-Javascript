// ALL FUNCTIONS IMPORTED
import {
  validFirst,
  validLast,
  validEmail,
  validBirthDate,
  controlCheckbox,
  validQuantity,
  ifCheckboxFilled,
} from "./validation.js";

// CONST
const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const btnCloseConfirm = document.querySelector(".btn-close-confirm2");
const form = document.querySelector("form");

// FUNCTION BUTTON SUBMIT WITH ALL FUNCTIONS IMPORTED
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    (validFirst(),
    validLast(),
    validEmail(),
    validBirthDate(),
    validQuantity(),
    controlCheckbox(),
    ifCheckboxFilled())
  ) {
    // CONDITIONS TO OPEN OR TO GET BACK TO FILL THE FORM
    modalConfirmation.style.display = "block";
    form.style.display = "none";
  } else {
    alert("Merci de remplir correctement votre inscription.");
  }
});

// FUNCTION TO CLOSE MODAL OF SUBSCRIPTION
btnCloseConfirm.addEventListener("click", () => {
  window.location.reload();
});
