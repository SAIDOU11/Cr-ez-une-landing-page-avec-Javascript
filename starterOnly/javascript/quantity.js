// Const
const quantity = document.getElementById("quantity");
const quantityMessage = document.getElementById("quantity-Message");

// Event function
quantity.addEventListener("change", () => {
  console.log("changement");
  validQuantity(this);
});

// function input validation & message
const validQuantity = (inputQuantity) => {
  let quantityRegExp = new RegExp(/^[0-9]+$/);
  let quantityValue = inputQuantity["quantity"].value;
  let quantityTest = quantityRegExp.test(quantityValue);

  if (quantityTest) {
    validQuantiyMessage();
  } else {
    errorQuantityMessage();
  }
};

// Message quantité valide
const validQuantiyMessage = () => {
  quantityMessage.textContent = "Quantité Valide";
  quantityMessage.style.fontSize = "15px";
  quantityMessage.style.color = "green";
  quantityMessage.style.marginBottom = "5px";
};

// Message quantité non valide
const errorQuantityMessage = () => {
  quantityMessage.textContent = "Quantité Non Valide";
  quantityMessage.style.fontSize = "15px";
  quantityMessage.style.color = "red";
  quantityMessage.style.marginBottom = "5px";
};
