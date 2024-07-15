let n = 32367;
let first, last;
first = n;
last = n % 10;
while(n>0){
    first =  n % 10;
    n = Math.floor(n/10);
}
console.log(`First:${first}, Last ${last}`);
