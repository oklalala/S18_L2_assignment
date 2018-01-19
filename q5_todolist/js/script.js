
// var rad = document.myForm.myRadios;
// var prev = null;
// for(var i = 0; i < rad.length; i++) {
//     rad[i].onclick = function() {
//         (prev)? console.log(prev.value):null;
//         if(this !== prev) {
//             prev = this;
//         }
//         console.log(this.value)
//     };
// }

function createToDo(){
  // console.log("1");
  var todo = document.createElement("div");
  var span = document.createElement("span");
  // console.log("2");
  var replaceButton = document.createElement("button");
  var removeButton = document.createElement("button");
  // console.log("3");
  var input = document.getElementById("input").value;
  // console.log(input);
  if (input == ""){
    alert("請寫點東西");
    // console.log("44");
    return;
    // console.log("45");
  }
  span.innerHTML = input;
  todo.appendChild(span);
  console.log(rad)
  // if (rad[0] == true){
  //   span.style.color = "red";
  // }
  // else{
  //   span.style.color = "darkgreen";
  // }
  
  // console.log("4");

  replaceButton.onclick = function(){
    // console.log("5");
    var reinput = document.getElementById("input").value;
    console.log(reinput)
    if(reinput == ""){
      alert("請輸入要修改的文字");
      return;
      // console.log("6");
    }
    this.parentNode.firstChild.innerHTML = reinput;
    document.getElementById("input").value = "";
    // console.log("7");
  }
  replaceButton.textContent = "R";
  todo.appendChild(replaceButton);
  // console.log("8");

  removeButton.onclick = function(){
    var v = confirm("Are you sure?")
    if(v){
      span.style.color = "green";
      this.parentNode.removeChild(replaceButton);
      this.parentNode.removeChild(this);
      //順序有差，如果移除自己，就不能移除兄弟
    }
  }
  removeButton.textContent = "V";
  todo.appendChild(removeButton);


  document.getElementById("todolist").appendChild(todo);
  document.getElementById("input").value = "";

}

