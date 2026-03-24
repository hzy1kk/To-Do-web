const taskBtn = document.querySelector("#taskBtn");
const taskList = document.querySelector("#taskList");
const taskInput = document.querySelector("#taskInput");

function addDeleteFunction(span, li) {
  span.addEventListener("click", function() {
    taskList.removeChild(li);
  });
}

document.querySelectorAll(".deleteSpan").forEach(span => {
  const li = span.parentElement;
  addDeleteFunction(span, li);
});

taskBtn.addEventListener("click", function() {
  const taskInputValue = taskInput.value.trim();
  if (taskInputValue === "") return;
  const li = document.createElement("li");
  li.textContent = taskInputValue;
  const deleteSpan = document.createElement("span");
  deleteSpan.textContent = "Excluir";
  deleteSpan.className = "deleteSpan";
  addDeleteFunction(deleteSpan, li);
  li.appendChild(deleteSpan);
  taskList.appendChild(li);
  taskInput.value = "";
});