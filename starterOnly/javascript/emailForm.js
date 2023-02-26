// Const
const emailAddress = document.getElementById("email");
const emailMessage = document.getElementById("email-Message");

// Event function
emailAddress.addEventListener("change", () => {
  validEmail(this);
});

// function input validation & message
const validEmail = (inputEmail) => {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  let emailValue = inputEmail["email"].value;
  let emailTest = emailRegExp.test(emailValue);

  if (emailTest) {
    validEmailMessage();
  } else {
    errorEmailMessage();
  }
};

// Message adresse valide
const validEmailMessage = () => {
  emailMessage.textContent = "Adresse Valide";
  emailMessage.style.fontSize = "15px";
  emailMessage.style.color = "green";
  emailMessage.style.marginBottom = "5px";
};

// Message adresse non valide
const errorEmailMessage = () => {
  emailMessage.textContent = "Adresse Non Valide";
  emailMessage.style.fontSize = "15px";
  emailMessage.style.color = "red";
  emailMessage.style.marginBottom = "5px";
};
