let n = 53787;
let max = 0;
let min = 9;

while(n > 0){
    let digit = n % 10;
    n = Math.floor(n / 10);

    if(digit > max) max = digit;
    if(digit < min) min = digit;
}

console.log(`${max} - ${min} = ${max - min}`)