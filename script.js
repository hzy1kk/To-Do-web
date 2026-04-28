function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const clearAllBtn = document.getElementById("clearAllBtn");

clearAllBtn.addEventListener("click", () => {
    taskList.innerHTML = "";
    updateCounter();
});
function updateCounter() {
    const total = document.querySelectorAll("#taskList li").length;
    const completed = document.querySelectorAll(".completed").length;
    taskCounter.innerText = `${completed} de ${total} tarefas concluídas`;
}

// Adicionar dentro do addTask ao criar o span:
span.addEventListener("click", () => {
    span.classList.toggle("completed");
    updateCounter();
});
const clearCompBtn = document.createElement("button");
clearCompBtn.innerText = "Limpar Concluídas";
document.body.appendChild(clearCompBtn);

clearCompBtn.addEventListener("click", () => {
    const completed = document.querySelectorAll(".completed");
    completed.forEach(task => task.parentElement.remove());
    updateCounter();
});
        span.innerText = taskText;
        
        li.appendChild(span);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});