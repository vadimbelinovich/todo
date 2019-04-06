"use strict";

const addButton = document.querySelector(".add");
const input = document.querySelector(".input");
const planed = document.querySelector(".planed");
const done = document.querySelector(".done");

function createEl(task) {
  let item = document.createElement("li");

  let checkbox = document.createElement("span");
  checkbox.classList.add("check");
  checkbox.innerHTML = "<i class='far fa-square'></i>";

  let text = document.createElement("label");
  text.classList.add("text");
  text.innerHTML = task;

  let deleteIcon = document.createElement("span");
  deleteIcon.classList.add("delete");
  deleteIcon.innerHTML = "<i class='fas fa-trash'></i>";

  item.appendChild(checkbox);
  item.appendChild(text);
  item.appendChild(deleteIcon);

  return item;
}

function addTask() {
  if (input.value) {
    let item = createEl(input.value);
    planed.prepend(item);
    bindTask(item);
    localStorage.setItem("finished", planed.innerHTML);
    input.value = "";
  }
}

addButton.addEventListener("click", addTask);

function deleteTask() {
  let li = this.parentNode;
  let ul = li.parentNode;
  ul.removeChild(li);
  localStorage.setItem("finished", planed.innerHTML);
}

function finishTask() {
  let li = this.parentNode;
  let checkbox = li.querySelector(".check");
  checkbox.innerHTML = "<i class='fas fa-check-square'></i>";
  bindTask(li);
  localStorage.setItem("finished", planed.innerHTML);
}

function bindTask(el) {
  let checkEl = el.querySelector(".check");
  let deleteEl = el.querySelector(".delete");

  checkEl.onclick = finishTask;
  deleteEl.onclick = deleteTask;
}

function loadToDo() {
  if (localStorage.getItem("finished")) {
    planed.innerHTML = localStorage.getItem("finished");
    let planedArr = Array.from(document.querySelectorAll("li"));
    for (let i = 0; i < planedArr.length; i++) {
      bindTask(planedArr[i]);
    }
  }
}

// let planedArr = Array.from(document.querySelector(".planed"));
// let planedList = planedArr[0].childNodes;

// console.log(planedList);

loadToDo();
