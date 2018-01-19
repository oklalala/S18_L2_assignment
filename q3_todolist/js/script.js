
function createToDo(){
  var todo = document.createElement("div");
  var span = document.createElement("span");
  var replaceButton = document.createElement("button");
  var removeButton = document.createElement("button");

  var input = document.getElementById("input").value;
  if (input == ""){
    alert("請寫點東西");
    return;
  }
  
  span.innerHTML = input;
  todo.appendChild(span);

  replaceButton.onclick = function(){
    var reinput = document.getElementById("input").value;
    console.log(reinput)
    if(reinput == ""){
      alert("請輸入要修改的文字");
      return;
    }
    this.parentNode.firstChild.innerHTML = reinput;
    document.getElementById("input").value = "";
  }
  replaceButton.textContent = "R";
  todo.appendChild(replaceButton);

  removeButton.onclick = function(){
    var v = confirm("Are you sure?")
    if(v){
     this.parentNode.parentNode.removeChild(this.parentNode);
    }
  }
  removeButton.textContent = "V";
  todo.appendChild(removeButton);


  document.getElementById("todolist").appendChild(todo);
  document.getElementById("input").value = "";

}

