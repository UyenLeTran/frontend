let elmNumber = document.getElementById("number");
let elmSaveNumber = document.getElementById("saved-number");
console.log(elmNumber);
// input    intputNumber  inpNumber
// button   buttonSubmit  btnSubmit
// h1-h6 p span div elmNumber

function decrement() {
  console.log("decrement");
  let number = parseInt(elmNumber.textContent);
  number -= 1;
  elmNumber.textContent = number;
  console.log(number);
}
function reset() {
  elmNumber.textContent = 0;

}
function increment() {
  let number = parseInt(elmNumber.textContent);
  number += 1;
  elmNumber.textContent = number;
  console.log(number);
}

function save() {
  let number = elmNumber.textContent;

  elmSaveNumber.textContent += (number+',');
  elmSaveNumber.textContent = elmSaveNumber.textContent.slice(0,-1);
}


