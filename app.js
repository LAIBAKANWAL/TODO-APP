var list = document.getElementById("list");


function addTodo(){
    var todoItem = document.getElementById("todo_item");

    var li = document.createElement("li");
    var liText = document.createTextNode(todoItem.value);
    li.appendChild(liText);
    li.setAttribute("class","size");
  
    var delBtn = document.createElement("button" );
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    li.appendChild( delBtn );
    delBtn .setAttribute("onClick","deleteItem(this)");
    delBtn.setAttribute("class","delbtn");
    delBtn.setAttribute("class","mrg");
    


    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onClick","editItem(this)");
    li.appendChild(editBtn );
    editBtn.setAttribute("class","edbtn");
    
    list.appendChild(li);
    todoItem.value ="";
}

function deleteAll(){
    list.innerHTML = "";
}

function deleteItem(e){
  e.parentNode.remove();
}

function editItem(e){
  var val = prompt ("Enter updated value",e.parentNode.firstChild.nodeValue);
  e.parentNode.firstChild.nodeValue = val;
}