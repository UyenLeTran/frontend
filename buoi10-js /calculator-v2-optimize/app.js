const btnSum = document.getElementById('btn-sum');
const btnSubtract = document.getElementById('btn-subtract');
const btnMultiply = document.getElementById('btn-multiply');
const btnDivide = document.getElementById('btn-divide');
const inputNumberOne = document.getElementById('number-one');
const inputNumberTwo = document.getElementById('number-two');
const elResult = document.getElementById('result');
btnSum.addEventListener("click",function(){
    caculator("+");
});
btnSubtract.addEventListener("click",function(){
    caculator("-");
});
btnMultiply.addEventListener("click",function(){
    caculator("*");
});
btnDivide.addEventListener("click",function(){
    caculator("/");
});
function caculator(math) {
    // lay so 1
    let numberOne = parseInt(inputNumberOne.value);
    // lay so 2
    let numberTwo = parseInt(inputNumberTwo.value);
    if(isNaN(numberOne)||isNaN(numberTwo)){
        alert("Mời nhập số 1 và số 2");
        return;
    }
    let result;
    switch (math) {
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "*":
            result = numberOne * numberTwo;
            break;
        case "/":
            if(numberTwo == 0){
                alert("Number Two phải # 0");
                return;
            }
            result = numberOne / numberTwo;

            break;
        default:
            break;
    }
    elResult.textContent = `${numberOne} ${math} ${numberTwo} = ${result}`;
}