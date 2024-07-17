let array31= [1, 3, 5, 7, 8, 10, 12];
let array30 =[4, 6, 9, 11];
let year = 2024;
let month = 2 ;
let result ="";
if(array31.includes(month)){
    result = "31";
}else if(array30.includes(month)){
    result = "30";
}else {
    result = "28";
    if(year % 400 ==0 || (year%4==0 && year%100 !=0)){
        result = "29";
    }     
}
    


console.log(`Tháng ${month} năm ${year} có ${result} ngày`);
    
