// - lấy buttonClolor
// - elmBox
// -elmText
const buttonColor = document.getElementById("buttonColor");
const elmBox = document.getElementById("elmBox");
const elmColor = document.getElementById("elmColor");

console.log(buttonColor);
console.log(elmBox);
console.log(elmColor);
buttonColor.addEventListener("click",function(){
  elmColor.textContent = getRandomColor();
  elmBox.style.background = getRandomColor();
});
elmColor.addEventListener("click",function(){
   // Copy the text inside the text field
  navigator.clipboard.writeText(elmColor.textContent);
  alert(elmColor.textContent + " da duoc copy thanh cong");
});
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setRandomColor() {
  $("#elmBox").css("background-color", getRandomColor());
}
function GeeksForGeeks() { 
  /* Lấy trường văn bản */ 
  let copyGfGText = document.getElementById("IdOfTextToCopy");     /* Chọn trường văn bản */     copyGfGText.select();     /* Sao chép văn bản bên trong trường văn bản */     document.execCommand("copy");     /* Sử dụng lệnh bên dưới để truy cập        giá trị của văn bản đã sao chép */     console.log(copyGfGText.value); }

  