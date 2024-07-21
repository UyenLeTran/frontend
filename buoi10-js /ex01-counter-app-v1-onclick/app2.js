let btnDecrease = document.getElementById("btn-decrease");
let btnReset = document.getElementById("btn-reset");
let btnIncrease = document.getElementById("btn-increase");
let btnSave = document.getElementById("btn-save");
let elmNumber = document.getElementById("number");
let elmSaveNumber = document.getElementById("saved-number");
btnDecrease.addEventListener("click",function(){
    changeNumber("-");
})
btnIncrease.addEventListener("click",function(){
    changeNumber("+")
})

function changeNumber(action){
    let number = parseInt(elmNumber.textContent);
    if(action == "+"){
        number += 1;
    }else{
        number -= 1;
    }
    
    elmNumber.textContent = number;
}

btnReset.addEventListener("click",function(){
    elmNumber.textContent = 0;
})

btnSave.addEventListener("click",function(){
    let number = elmNumber.textContent;
    elmSaveNumber.textContent += (number+',');
    elmSaveNumber.textContent = elmSaveNumber.textContent.slice(0,-1);
})

