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
    planed.append(item);
    bindTask(item, finishTask);
    input.value = "";
  }
}

addButton.addEventListener("click", addTask);

function deleteTask() {
  let li = this.parentNode;
  let ul = li.parentNode;
  ul.removeChild(li);
}

function finishTask() {
  let li = this.parentNode;
  let checkbox = li.querySelector(".check");
  checkbox.innerHTML = "<i class='fas fa-check-square'></i>";

  done.append(li);
  bindTask(li, unfinishTask);
}

function unfinishTask() {
  let li = this.parentNode;
  let checkbox = li.querySelector(".check");
  checkbox.innerHTML = "<i class='far fa-square'></i>";

  planed.append(li);
  bindTask(li, finishTask);
}

function bindTask(el, checkboxEvent) {
  let checkEl = el.querySelector(".check");
  let deleteEl = el.querySelector(".delete");

  checkEl.onclick = checkboxEvent;
  deleteEl.onclick = deleteTask;
}

console.log(createEl(1234));
