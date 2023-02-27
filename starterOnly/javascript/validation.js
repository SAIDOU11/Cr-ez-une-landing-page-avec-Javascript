// Const
const firstName = document.getElementById("first");
const firstMessage = document.getElementById("first-Message");
const lastName = document.getElementById("last");
const lastMessage = document.getElementById("last-Message");

// function input validation & message
export const validFirst = () => {
  let firstRegExp = new RegExp(/[a-zA-Z]{2,}/);
  let firstValue = firstName.value;
  let firstTest = firstRegExp.test(firstValue);
  console.log("essaaaaaa", firstValue);
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

// Event function
firstName.addEventListener("change", () => {
  validFirst();
});

// Const

// function input validation & message
export const validLast = () => {
  let lastRegExp = new RegExp(/[a-zA-Z]{2,}/);
  let lastValue = lastName.value;
  let lastTest = lastRegExp.test(lastValue);
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

// Event function
lastName.addEventListener("change", () => {
  validLast();
});

// firstname booléean correct ou non .. message

// MEME CHOSE FUNCTION SUBMIT FORMULAIRE
