let start = 1;
let end = 2;
let result ="";
let i = start + 1;
while(i<end){
    if(i%2==0)
        result +=i+"-";
    i++;

}
if(result==""){
    result="Không có";
}else{
    result = result.slice(0,-1);
}
console.log(result);

