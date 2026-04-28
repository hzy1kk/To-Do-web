const taskInput = document.getElementById("taskInput");
const taskBtn = document.getElementById("taskBtn");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
const clearAllBtn = document.getElementById("clearAllBtn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

function updateCounter() {
    const total = document.querySelectorAll("#taskList li").length;
    const completed = document.querySelectorAll(".completed").length;
    taskCounter.innerText = `${completed} de ${total} tarefas concluídas`;
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.innerText = text;
    span.onclick = () => {
        span.classList.toggle("completed");
        updateCounter();
    };

    const editBtn = document.createElement("button");
    editBtn.innerText = "Editar";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => {
        const novoTexto = prompt("Editar tarefa:", span.innerText);
        if (novoTexto) {
            span.innerText = novoTexto;
        }
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    updateCounter();
}

taskBtn.onclick = addTask;

taskInput.onkeypress = (e) => {
    if (e.key === "Enter") addTask();
};

clearAllBtn.onclick = () => {
    taskList.innerHTML = "";
    updateCounter();
};

clearCompletedBtn.onclick = () => {
    const completed = document.querySelectorAll(".completed");
    completed.forEach(s => s.parentElement.remove());
    updateCounter();
};