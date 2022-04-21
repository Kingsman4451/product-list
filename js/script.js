let elInput = document.querySelector("#form-input");
let warningText = document.querySelector(".warning-text")
let elBtn = document.querySelector(".form-btn");
let elLastList = document.querySelector(".last-lists");
let elList = document.querySelector(".product-list");
let elListText = document.querySelector(".list-text");
let elRemoveBtn = document.querySelector(".remove-btn");
let elClearBtn = document.querySelector(".list-btn");

let newLi;
let productList = [];


elBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if(productList.includes(elInput.value.trim().toLowerCase())){
    warningText.style.display = "block";
    warningText.textContent = `${elInput.value.trim()} is already added!`;
    elInput.style.borderColor = "#ffc107"
    elInput.value = "";
    return
  }else{
    elInput.style.borderColor = "#ced4da";
    warningText.style.display = "none";
    warningText.textContent = "";
  }
  
  if(elInput.value == ""){
    return;
  }else{
    newLi = document.createElement("li");
    let upperText = elInput.value.trim().split("");
    upperText[0] = upperText[0].toUpperCase();
    upperText = upperText.join("");
    newLi.textContent = upperText;
    productList.push(elInput.value.trim().toLowerCase());
    elList.append(newLi);
    elInput.value = "";
    newLi.classList.add("product-item");
    newLi.style.color = "";
  }
  if(elList.innerHTML != ""){
    elListText.textContent = "";
  }else if(elList.innerHTML == ""){
    elListText.textContent = "List empty";
  }
})


elRemoveBtn.addEventListener("click", () => {
  if(elList.innerHTML == "") {
    elListText.textContent = "List empty";
    return;
  }else{
    productList.pop(productList.length - 1);
    elList.removeChild(elList.lastElementChild);
  }
})


elClearBtn.addEventListener("click", () => {
  let newLiList = document.createElement("li");
  newLiList.classList.add("last-list-item")
  newLiList.textContent = productList.join(", ");
  elLastList.append(newLiList);
  elList.innerHTML = "";
  elListText.textContent = "List empty";
  productList = [];
})