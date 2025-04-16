let inputTodo = document.querySelector(`#inputTodo`);
let ol = document.querySelector(`ol`);
let arr = [];
let para = document.querySelector("#para")

function runTodo() {
    let now = new Date();
    let datetimestring = now.toLocaleString()
    ol.innerHTML = "";
    arr.push(inputTodo.value);
    inputTodo.value = "";
    console.log(arr);

     if (inputTodo.value.trim() === "") {
        ol.innerHTML = ("input is empity")
     }
     else{
        for (let i = 0; i < arr.length; i++) {
            ol.innerHTML += `<li id="todo-list">${arr[i]}
            <button onclick="deletTodo(${i})" id="delete-button">Delete</button> <button onclick=
            "editTodo(${i})" id="edit-todo">Edit</button></li> ${datetimestring}`
    }
    }



}


function deletTodo(index) {
    ol.innerHTML="";
    console.log(`delete todo`, index)
    arr.splice(index , 1 )

    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li id="todo-list">${arr[i]}
        <button onclick="deletTodo(${i})" id="delete-button">Delete</button> <button onclick=
        "editTodo(${i})" id="edit-todo">Edit</button>
        </li>`

    }
}

function editTodo(index) {
    ol.innerHTML=""
    console.log(`edit todo`, index);
    let updatedvalue = prompt("Enter Updated Value");
    arr.splice(index,1,updatedvalue)
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li id="todo-list">${arr[i]}
        <button onclick="deletTodo(${i})" id="delete-button">Delete</button> <button onclick=
        "editTodo(${i})" id="edit-todo">Edit</button>
        </li>`
    }
}