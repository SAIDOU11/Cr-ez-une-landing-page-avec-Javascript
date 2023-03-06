// Const
const firstName = document.getElementById("first");
const firstMessage = document.getElementById("first-Message");
const lastName = document.getElementById("last");
const lastMessage = document.getElementById("last-Message");
const emailAddress = document.getElementById("email");
const emailMessage = document.getElementById("email-Message");
const birthDate = document.getElementById("birthdate");
const birthMessage = document.getElementById("birth-Message");
const locationCheck = document.getElementsByName("location");
const locationMessage = document.getElementById("error-Location");
const checkboxCase = document.getElementById("checkbox1");
const ifCheckCase = document.getElementById("error-Checkbox");
const quantity = document.getElementById("quantity");
const quantityMessage = document.getElementById("quantity-Message");

// function input validation firstName & message
export const validFirst = () => {
  let firstRegExp = new RegExp(/[a-zA-Z]{2,}/);
  let firstValue = firstName.value;
  let firstTest = firstRegExp.test(firstValue);
  // conditions
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

// function input validation lastName & message
export const validLast = () => {
  let lastRegExp = new RegExp(/[a-zA-Z]{2,}/);
  let lastValue = lastName.value;
  console.log(lastValue);
  let lastTest = lastRegExp.test(lastValue);
  // conditions
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

// function input validation email & message
export const validEmail = () => {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  let emailValue = emailAddress.value;
  let emailTest = emailRegExp.test(emailValue);
  // conditions
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

// function input validation birthDate & message
export const validBirthDate = () => {
  let birthRegExp = new RegExp(
    /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
  );
  let birthValue = birthDate.value;
  let birthTest = birthRegExp.test(birthValue);
  // conditions
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

// function input validation quantity & message
export const validQuantity = () => {
  let quantityRegExp = new RegExp(/^[0-9]+$/);
  let quantityValue = quantity.value;
  let quantityTest = quantityRegExp.test(quantityValue);
  // conditions
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

// function input validation controlCheckbox & message
export const controlCheckbox = () => {
  for (let i = 0; i < locationCheck.length; i++) {
    // conditions
    if (locationCheck[i].checked) {
      console.log(
        locationCheck,
        locationCheck.value,
        locationCheck[i].value,
        locationCheck.length
      );
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
      return false;
    }
  }
};

const ifCheckboxFilled = () => {
  // conditions
  if (checkboxCase.checked) {
    checkboxCase.style.border = "solid 2px green";
    ifCheckCase.textContent = "Champs Valide";
    ifCheckCase.style.color = "green";
    ifCheckCase.style.fontSize = "15px";
    ifCheckCase.style.marginBottom = "10px";
    return true;
  } else {
    checkboxCase.style.border = "solid 2px red";
    ifCheckCase.textContent = "Merci d'accepter les conditions d'utilisations";
    ifCheckCase.style.fontSize = "15px";
    ifCheckCase.style.marginBottom = "10px";
    ifCheckCase.style.color = "red";
    return false;
  }
};

// All Event functions
checkboxCase.addEventListener("change", () => {
  // conditions
  ifCheckboxFilled();
});

firstName.addEventListener("change", () => {
  validFirst();
});

lastName.addEventListener("change", () => {
  validLast();
});

emailAddress.addEventListener("change", () => {
  validEmail();
});

birthDate.addEventListener("change", () => {
  validBirthDate();
});

quantity.addEventListener("change", () => {
  validQuantity();
});

locationCheck.forEach((check) =>
  check.addEventListener("change", function () {
    controlCheckbox();
  })
);
