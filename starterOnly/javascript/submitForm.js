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

// Const
const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const btnCloseConfirm = document.querySelector(".btn-close-confirm2");
const form = document.querySelector("form");

// function button submit
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
    modalConfirmation.style.display = "block";
    form.style.display = "none";
  } else {
    alert("Merci de remplir correctement votre inscription.");
  }
}); //

// function to close modal of subscription

btnCloseConfirm.addEventListener("click", () => {
  window.location.reload();
});
