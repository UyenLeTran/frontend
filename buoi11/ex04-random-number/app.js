// lấy inpMin
// lấy inpMax
//lấy elmresult

const inputMin = document.getElementById("input-min");
const inputMax = document.getElementById("input-max");
const inputResult = document.getElementById("input-result");
const buttonGenerate = document.getElementById("button-generate");
//Click
buttonGenerate.addEventListener("click",function(){
    random();
});
//Enter
function handle(e){
  if(e.keyCode === 13){
      e.preventDefault(); // Ensure it is only this code that runs
      random();
  }
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  }
function random(){
    
    let min = parseInt(inputMin.value);
    let max = parseInt(inputMax.value);
    console.log(isNaN(min));
    if(min >= max){
      alert("min phải nhỏ hơn max");
      return;
    }
    if(isNaN(min)==true || isNaN(max)==true){
      alert("min và max không được trống");
      return;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    inputResult.value = randomNumber(min, max);
}
