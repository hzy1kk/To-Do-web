function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        const span = document.createElement("span");
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