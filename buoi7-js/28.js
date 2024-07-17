let totalSale = 300;
let result = 0;
if(totalSale <= 100)
    result = totalSale * 0.05;
else if(totalSale <= 300)
    result = totalSale * 0.1;
else if(totalSale > 300)
    result = totalSale * 0.2;
console.log("Hoa hồng:" + result);





let totalSale = 100;
const BONUS_LEVEL_ONE       = 0.05;
const BONUS_LEVEL_TWO       = 0.1;
const BONUS_LEVEL_THREE     = 0.2;

let percent = BONUS_LEVEL_THREE;

if(totalSale <= 100 ) {
    percent = BONUS_LEVEL_ONE;
}else if(totalSale <= 300 ) {
    percent = BONUS_LEVEL_TWO;
}
let commission = totalSale * percent;
console.log(`Hoa hồng: ${commission}`)