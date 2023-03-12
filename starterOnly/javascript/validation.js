// CONST
const firstName = document.getElementById("first");
const firstMessage = document.getElementById("first-Message");
const lastName = document.getElementById("last");
const lastMessage = document.getElementById("last-Message");
const emailAddress = document.getElementById("email");
const emailMessage = document.getElementById("email-Message");
const birthDate = document.getElementById("birthdate");
const birthMessage = document.getElementById("birth-Message");
const quantity = document.getElementById("quantity");
const quantityMessage = document.getElementById("quantity-Message");
const locationCheck = document.getElementsByName("location");
const locationMessage = document.getElementById("error-Location");
const checkboxOne = document.getElementById("checkbox1");
const checkboxTwo = document.getElementById("checkbox2");
const ifCheckCase = document.getElementById("error-Checkbox");

// FUNCTION INPUT VALIDATION FIRSTNAME & MESSAGE
export const validFirst = () => {
  let firstRegExp = new RegExp(/[a-zA-Z]{2,}/);
  let firstValue = firstName.value;
  let firstTest = firstRegExp.test(firstValue);
  // CONDITION IF ELSE
  if (firstTest) {
    firstMessage.textContent = "Prénom Valide";
    firstMessage.style.fontSize = "15px";
    firstMessage.style.color = "green";
    firstMessage.style.marginBottom = "5px";
    return true;
  } else {
    firstMessage.textContent = "Prénom Non Valide";
    firstMessage.style.fontSize = "15px";
    firstMessage.style.color = "red";
    firstMessage.style.marginBottom = "5px";
    return false;
  }
};

// FUNCTION INPUT VALIDATION LASTNAME & MESSAGE
export const validLast = () => {
  let lastRegExp = new RegExp(/[a-zA-Z]{2,}/);
  let lastValue = lastName.value;
  console.log(lastValue);
  let lastTest = lastRegExp.test(lastValue);
  // CONDITION IF ELSE
  if (lastTest) {
    lastMessage.textContent = "Nom Valide";
    lastMessage.style.fontSize = "15px";
    lastMessage.style.color = "green";
    lastMessage.style.marginBottom = "5px";
    return true;
  } else {
    lastMessage.textContent = "Nom Non Valide";
    lastMessage.style.fontSize = "15px";
    lastMessage.style.color = "red";
    lastMessage.style.marginBottom = "5px";
    return false;
  }
};

// FUNCTION INPUT VALIDATION EMAIL & MESSAGE
export const validEmail = () => {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  let emailValue = emailAddress.value;
  let emailTest = emailRegExp.test(emailValue);
  // CONDITION IF ELSE
  if (emailTest) {
    emailMessage.textContent = "Adresse Valide";
    emailMessage.style.fontSize = "15px";
    emailMessage.style.color = "green";
    emailMessage.style.marginBottom = "5px";
    return true;
  } else {
    emailMessage.textContent = "Adresse Non Valide";
    emailMessage.style.fontSize = "15px";
    emailMessage.style.color = "red";
    emailMessage.style.marginBottom = "5px";
    return false;
  }
};

// FUNCTION INPUT VALIDATION BIRTHDATE & MESSAGE
export const validBirthDate = () => {
  let birthRegExp = new RegExp(
    /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
  );
  let birthValue = birthDate.value;
  let birthTest = birthRegExp.test(birthValue);
  // CONDITION IF ELSE
  if (birthTest) {
    birthMessage.textContent = "Date de naissance Valide";
    birthMessage.style.fontSize = "15px";
    birthMessage.style.color = "green";
    birthMessage.style.marginBottom = "5px";
    return true;
  } else {
    birthMessage.textContent = "Vous devez entrer votre date de naissance.";
    birthMessage.style.fontSize = "15px";
    birthMessage.style.color = "red";
    birthMessage.style.marginBottom = "5px";
    return false;
  }
};

// // FUNCTION INPUT VALIDATION QUANTITY & MESSAGE
export const validQuantity = () => {
  let quantityRegExp = new RegExp(/^[0-9]+$/);
  let quantityValue = quantity.value;
  let quantityTest = quantityRegExp.test(quantityValue);
  // CONDITION IF ELSE
  if (quantityTest) {
    quantityMessage.textContent = "Quantité Valide";
    quantityMessage.style.fontSize = "15px";
    quantityMessage.style.color = "green";
    quantityMessage.style.marginBottom = "5px";
    return true;
  } else {
    quantityMessage.textContent = "Quantité Non Valide";
    quantityMessage.style.fontSize = "15px";
    quantityMessage.style.color = "red";
    quantityMessage.style.marginBottom = "5px";
    return false;
  }
};

// FUNCTION INPUT VALIDATION CHECKBOX LOCATION TOURNAMENT & MESSAGE
export const controlCheckbox = () => {
  let locTournamentCheck = false;
  for (let i = 0; i < locationCheck.length; i++) {
    const isCheck = locationCheck[i].checked;
    console.log(isCheck, locationCheck[i]);
    // CONDITION IF ELSE
    if (isCheck) {
      locTournamentCheck = true;
      console.log(locTournamentCheck);
      locationMessage.textContent = "Champ Valide";
      locationMessage.style.color = "green";
      locationMessage.style.fontSize = "15px";
      locationMessage.style.marginBottom = "10px";
      return true;
    } else {
      locationMessage.textContent = "Champ Invalide";
      locationMessage.style.color = "red";
      locationMessage.style.fontSize = "15px";
      locationMessage.style.marginBottom = "10px";
    }
  }
};

// // FUNCTION INPUT VALIDATION FOR 2 CHECKBOXES & MESSAGE
export const ifCheckboxFilled = () => {
  // CONDITION IF ELSE
  if (checkboxOne.checked && checkboxTwo.checked === true) {
    checkboxOne.style.border = "solid 2px green";
    checkboxTwo.style.border = "solid 2px green";
    ifCheckCase.textContent = "Champs Valide";
    ifCheckCase.style.color = "green";
    ifCheckCase.style.fontSize = "15px";
    ifCheckCase.style.marginBottom = "10px";
    return true;
  } else {
    checkboxOne.style.border = "solid 2px green";
    checkboxTwo.style.border = "solid 2px red";
    ifCheckCase.textContent = "Merci d'accepter les conditions d'utilisations";
    ifCheckCase.style.fontSize = "15px";
    ifCheckCase.style.marginBottom = "10px";
    ifCheckCase.style.color = "red";
    return false;
  }
};

// EVENT FUNCTION ON CHANGE FOR FIRSTNAME
firstName.addEventListener("change", () => {
  // LAUNCH FUNCTION ON CHANGE
  validFirst();
});
// EVENT FUNCTION ON CHANGE FOR LASTNAME
lastName.addEventListener("change", () => {
  // LAUNCH FUNCTION ON CHANGE
  validLast();
});
// EVENT FUNCTION ON CHANGE FOR EMAIL ADDRESS
emailAddress.addEventListener("change", () => {
  // LAUNCH FUNCTION ON CHANGE
  validEmail();
});
// EVENT FUNCTION ON CHANGE FOR BIRTH DATE
birthDate.addEventListener("change", () => {
  // LAUNCH FUNCTION ON CHANGE
  validBirthDate();
});
// EVENT FUNCTION ON CHANGE FOR QUANTITY
quantity.addEventListener("change", () => {
  // LAUNCH FUNCTION ON CHANGE
  validQuantity();
});
// EVENT FUNCTION ON CHANGE FOR LOCATION
locationCheck.forEach((check) =>
  check.addEventListener("change", function () {
    // LAUNCH FUNCTION ON CHANGE
    controlCheckbox();
  })
);
// EVENT FUNCTION ON CHANGE FOR CHECKBOX 1
checkboxOne.addEventListener("change", () => {
  // LAUNCH FUNCTION ON CHANGE
  ifCheckboxFilled();
});
// EVENT FUNCTION ON CHANGE FOR CHECKBOX 2
checkboxTwo.addEventListener("change", () => {
  // LAUNCH FUNCTION ON CHANGE
  ifCheckboxFilled();
});
