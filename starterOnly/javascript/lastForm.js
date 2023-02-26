// Const
const lastName = document.getElementById("last");
const lastMessage = document.getElementById("last-Message");

// Event function
lastName.addEventListener("change", () => {
  validLast(this);
});

// function input validation & message
const validLast = (inputLast) => {
  let lastRegExp = new RegExp(/[a-zA-Z]{2,}/);
  let lastValue = inputLast["last"].value;
  let lastTest = lastRegExp.test(lastValue);

  if (lastTest) {
    validLastMessage();
  } else {
    errorLastMessage();
  }
};

// Message Nom valide function
const validLastMessage = () => {
  lastMessage.textContent = "Nom Valide";
  lastMessage.style.fontSize = "15px";
  lastMessage.style.color = "green";
  lastMessage.style.marginBottom = "5px";
};

// Message Nom non valide function
const errorLastMessage = () => {
  lastMessage.textContent = "Nom Non Valide";
  lastMessage.style.fontSize = "15px";
  lastMessage.style.color = "red";
  lastMessage.style.marginBottom = "5px";
};
