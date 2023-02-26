// Const
const firstName = document.getElementById("first");
const firstMessage = document.getElementById("first-Message");

// Event function
firstName.addEventListener("change", () => {
  console.log("fonctionne???");
  validFirst(this);
});

// function input validation & message
const validFirst = (inputFirst) => {
  let firstRegExp = new RegExp(/[a-zA-Z]{2,}/);
  let firstValue = inputFirst["first"].value;
  let firstTest = firstRegExp.test(firstValue);

  if (firstTest) {
    validFirstMessage();
  } else {
    errorFirstMessage();
  }
};

// Message Prénom valide
const validFirstMessage = () => {
  firstMessage.textContent = "Prénom Valide";
  firstMessage.style.fontSize = "15px";
  firstMessage.style.color = "green";
  firstMessage.style.marginBottom = "5px";
};

// Message Prénom non valide
const errorFirstMessage = () => {
  firstMessage.textContent = "Prénom Non Valide";
  firstMessage.style.fontSize = "15px";
  firstMessage.style.color = "red";
  firstMessage.style.marginBottom = "5px";
};
