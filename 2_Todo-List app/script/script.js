let input = document.querySelector(".input");
let taskList = document.querySelector(".todo");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

function addTask() {
  if (input.value == "") {
    alert("you should enter something !!");
  } else {
    let newTask = document.createElement("li");
    newTask.innerHTML = input.value;
    list.appendChild(newTask);
    input.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    newTask.appendChild(span);
  }
  saveData();
}

btn.addEventListener("click", function () {
  addTask();
});
list.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
  saveData();
});
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask(); // Call getData function when Enter key is pressed
  }
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function showData() {
 list.innerHTML= localStorage.getItem("data");
}
showData();
