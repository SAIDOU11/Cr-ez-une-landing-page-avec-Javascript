import {
  validFirst,
  validLast,
  validEmail,
  validBirthDate,
  controlCheckbox,
  validQuantity,
} from "./validation.js";

// Const
const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const btnCloseConfirm = document.querySelector(".btn-close-confirm2");
const form = document.querySelector("form");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("essaie");
  if (
    (validFirst(),
    validLast(),
    validEmail(),
    validBirthDate(),
    validQuantity(),
    controlCheckbox())
  ) {
    modalConfirmation.style.display = "block";
    form.style.display = "none";
  } else {
    alert("Merci de remplir correctement votre inscription.");
  }
}); //

// Fonction pour fermer la modale de confirmation d'inscription

btnCloseConfirm.addEventListener("click", () => {
  window.location.reload();
});
