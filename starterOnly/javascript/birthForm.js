// Const
const birthDate = document.getElementById("birthdate");
const birthMessage = document.getElementById("birth-Message");

// function input validation & message
const validBirthDate = (inputBirth) => {
  let birthRegExp = new RegExp(
    /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
  );
  let birthValue = inputBirth["birthdate"].value;
  let birthTest = birthRegExp.test(birthValue);

  if (birthTest) {
    birthMessage.textContent = "Date de naissance Valide";
    birthMessage.style.fontSize = "15px";
    birthMessage.style.color = "green";
    birthMessage.style.marginBottom = "5px";
  } else {
    birthMessage.textContent = "Vous devez entrer votre date de naissance.";
    birthMessage.style.fontSize = "15px";
    birthMessage.style.color = "red";
    birthMessage.style.marginBottom = "5px";
  }
};

// Event function
birthDate.addEventListener("change", () => {
  validBirthDate(this);
});
