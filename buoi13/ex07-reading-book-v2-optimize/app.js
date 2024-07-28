const btnFontSizeDecrease = document.getElementById("btnFontSizeDecrease");
const btnFontSizeIncrease = document.getElementById("btnFontSizeIncrease");
const elmContent = document.getElementById("content");
btnFontSizeDecrease.addEventListener("click",function(){
  mathfont("-");
});
btnFontSizeIncrease.addEventListener("click",function(){
  mathfont("+");
});
function mathfont(str){
  var style = window.getComputedStyle(elmContent, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style); 
  if(str == "-")
    fontSize-=1;
  if(str == "+")
    fontSize+=1;
// now you have a proper float for the font size (yes, it can be a float, not just an integer)
elmContent.style.fontSize = fontSize  + 'px';
}