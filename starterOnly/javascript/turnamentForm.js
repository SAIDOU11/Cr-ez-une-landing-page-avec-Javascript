// Const
let locationCheck = document.getElementsByName("location");
let locationMessage = document.getElementById("error-Location");

// function input validation & message
const controlCheckbox = () => {
  for (let i = 0; i < locationCheck.length; i++) {
    if (locationCheck[i].checked) {
      locationMessage.textContent = "Champ Valide";
      locationMessage.style.color = "green";
      locationMessage.style.fontSize = "15px";
      locationMessage.style.marginBottom = "10px";
      return true;
    }
    // else {
    //   locationMessage.textContent = "Champ Invalide";
    //   locationMessage.style.color = "red";
    //   locationMessage.style.fontSize = "15px";
    //   locationMessage.style.marginBottom = "10px";
    //   return false;
    // }
  }
};

// Event function
locationCheck.forEach((locationCheckInput) =>
  locationCheckInput.addEventListener("change", function () {
    controlCheckbox();
  })
);
