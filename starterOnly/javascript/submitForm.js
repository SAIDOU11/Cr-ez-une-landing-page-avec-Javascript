import { validFirst } from "./firstForm.js";

// Const
const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const btnCloseConfirm = document.querySelector(".btn-close-confirm");
const form = document.querySelector("form");

// Fonction pour ouvrir la modale de confirmation d'inscription :

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("essaie");
  if (
    validFirst()
    // &&
    // validLast() &&
    // validEmail() &&
    // validBirthDate() &&
    // validQuantity() &&
    // controlCheckbox() &&
    // ifCheckboxFilled()
  ) {
    modalConfirmation.style.display = "block";
    form.style.display = "none";
  } else {
    alert("Merci de remplir correctement votre inscription.");
  }
});

// Fonction pour fermer la modale de confirmation d'inscription

btnCloseConfirm.addEventListener("click", () => {
  window.location.reload();
});
