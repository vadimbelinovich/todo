"use strict";

const addButton = document.querySelector(".add");
const input = document.querySelector(".input");
const planed = document.querySelector(".planed");
const done = document.querySelector(".done");

function createEl(task) {
  let item = document.createElement("li");

  let checkbox = document.createElement("span");
  checkbox.classList.add("check");
  checkbox.innerHTML = "<i class='fas fa-square'></i>";

  let text = document.createElement("label");
  text.classList.add("text");
  text.innerHTML = task;

  let input = document.createElement("input");

  let deleteIcon = document.createElement("span");
  deleteIcon.classList.add("delete");
  deleteIcon.innerHTML = "<i class='fas fa-trash'></i>";

  let editIcon = document.createElement("span");
  editIcon.classList.add("edit");
  editIcon.innerHTML = "<i class='fas fa-pen'></i>";

  item.appendChild(checkbox);
  item.appendChild(text);
  item.appendChild(input);
  item.appendChild(deleteIcon);
  item.appendChild(editIcon);

  return item;
}

console.log(createEl(1234));
