// Const
const firstName = document.getElementById("first");
const firstMessage = document.getElementById("first-Message");

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
  console.log(firstName);
  validFirst();
});
