"use strict"
var state = true;
function toggleLight(){
  var image = document.getElementById("image");
  state = !state;
  state ?  image.src = "img/on.jpg" : image.src = "img/off.jpg";
}

function setUp(){
  document.getElementById("image").src = "img/on.jpg";
  document.getElementById("input").textcontent = "";
  //不能用count當變數？！
  var input = document.getElementById("input").value;
  console.log(input);
  if (isNaN(input)){
    alert("請輸入數字好嗎？");
    return;
  }
  else if (input == 0){
    alert("幫你從3秒倒數");
    input = 3;
  }
  else{
    console.log(input);
  }

  //教案的部分 小變動參數timeLift => input
  document.getElementById("timer").innerHTML = input;
  function countDownTimer(){
    input = input - 1;
    if (input <= 0){
      document.getElementById("image").src = "img/off.jpg";
      clearInterval(setting);
    }
    document.getElementById("timer").innerHTML  = input;
  }

  var setting = setInterval(countDownTimer,1000);
}

