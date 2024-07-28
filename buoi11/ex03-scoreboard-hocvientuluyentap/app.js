// Lấy tất cả button class btn => listButton = document.getElementsByClassName
// Duyệt qua các butotn trong listButton
  // Lấy được điểm score
  // Kiểm tra class có chứa honme => cộng điểm bên tría
  //  Cộn
  const listButton = document.getElementsByClassName("btn");
  const elmHome = document.querySelector(".box-score.home");
  const elmAway = document.querySelector(".box-score.away");
  let scoreHome = 0;
  let scoreAway = 0;
  console.log(elmAway);
  for(let i = 0; i<listButton.length; i++){
    listButton[i].addEventListener('click',function(){
      let score = parseInt(listButton[i].textContent);
      if(listButton[i].classList.contains("home")){
        scoreHome+=score
        showScore(scoreHome, elmHome);
      }
      if(listButton[i].classList.contains("away")){
        scoreAway += score;
        showScore(scoreAway, elmAway);
      }
    });
  }
  function showScore(math, elm){
    if(math <10)
      elm.textContent = "0"+math;
    else elm.textContent = math;
  }
  