// Const
const birthDate = document.getElementById("birthdate");
const birthMessage = document.getElementById("birth-Message");

// Event function
birthDate.addEventListener("change", () => {
  console.log("birthDate OK ?");
  validBirthDate(this);
});

// function input validation & message
const validBirthDate = (inputBirth) => {
  let birthRegExp = new RegExp(
    /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
  );
  let birthValue = inputBirth["birthdate"].value;
  let birthTest = birthRegExp.test(birthValue);

  if (birthTest) {
    validBirthMessage();
  } else {
    errorBirthMessage();
  }
};

// Message Date de naissance valide
const validBirthMessage = () => {
  birthMessage.textContent = "Date de naissance Valide";
  birthMessage.style.fontSize = "15px";
  birthMessage.style.color = "green";
  birthMessage.style.marginBottom = "5px";
};

// Message Date de naissance non valide
const errorBirthMessage = () => {
  birthMessage.textContent = "Vous devez entrer votre date de naissance.";
  birthMessage.style.fontSize = "15px";
  birthMessage.style.color = "red";
  birthMessage.style.marginBottom = "5px";
};
