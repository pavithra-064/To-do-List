const ip = document.getElementById("input");
const list = document.getElementsByClassName("list")[0];

function addTask() {
  if (ip.value === "") alert("Enter task");
  else {
    let li = document.createElement("li");
    li.innerHTML = ip.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  ip.value = "";
  saveData();
}

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function getData() {
  list.innerHTML = localStorage.getItem("data");
}

getData();
