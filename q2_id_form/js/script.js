
function validate(){
  console.log("1")
  var code = document.getElementById("nric").value;
  if (code == ""){
    alert("內容不能是空的");
  }
  else if (!isNaN(code)){
    alert("你漏了英文字母嗎？！");
  }
  else if (code.length != 10){
    alert("內容長度不正確");
  }
  else if(code[1]==1){
    document.getElementById("result").innerHTML = "帥哥通過驗證";
  }
  else if(code[1]==2){
    document.getElementById("result").innerHTML = "美女通過驗證摟！";
  }
  else{
    alert("請再確認一次")
  }

}