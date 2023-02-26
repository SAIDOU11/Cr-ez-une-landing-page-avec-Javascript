//Déclaration de mes variables checkbox1 et generalCheckboxError :
let checkboxCase = document.getElementById("checkbox1");
let ifCheckCase = document.getElementById("error-Checkbox");

//Condition pour le contrôle du champs checkbox :
function ifCheckboxFilled() {
  if (checkboxCase.checked) {
    checkboxCase.style.border = "solid 2px green";
    ifCheckCase.textContent = "Champs Valide";
    ifCheckCase.style.color = "green";
    ifCheckCase.style.fontSize = "15px";
    ifCheckCase.style.marginBottom = "10px";
  } else {
    checkboxCase.style.border = "solid 2px red";
    ifCheckCase.textContent = "Merci d'accepter les conditions d'utilisations";
    ifCheckCase.style.fontSize = "15px";
    ifCheckCase.style.marginBottom = "10px";
    ifCheckCase.style.color = "red";
    return false;
  }
}

// Event
checkboxCase.addEventListener("change", () => {
  ifCheckboxFilled();
});
