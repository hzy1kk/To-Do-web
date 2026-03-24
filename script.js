const taskBtn = document.querySelector("#taskBtn");
const taskList = document.querySelector("#taskList");
const taskInput = document.querySelector("#taskInput");

taskBtn.addEventListener("click", function() {
  const taskInputValue = taskInput.value.trim();
  if (taskInputValue === "") return;
  const li = document.createElement("li");
  li.textContent = taskInputValue;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Excluir";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", function() {
    taskList.removeChild(li);
  });
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});