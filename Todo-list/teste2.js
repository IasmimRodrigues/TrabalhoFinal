let tasks = [];

function createTask() {
  let taskInput = document.getElementById("taskInput");
  let dateInput = document.getElementById("dateInput");

  const task = {
    taskName: taskInput.value,
    taskDate: dateInput.value,
  };

  tasks.push(task);
  saveTasksToLocalStorage();

  let taskList = document.querySelector(".tasks ul");
  let newTaskItem = document.createElement("li");
  newTaskItem.innerHTML = `
    <input type="checkbox" onclick="taskFinish(this)">
    ${task.taskName} - ${task.taskDate}
    <button onclick="deleteTask(this.parentNode)">Excluir</button>
  `;
  taskList.appendChild(newTaskItem);

  taskInput.value = "";
  dateInput.value = "";
}

function deleteTask(taskItem) {
  let taskList = document.querySelector(".tasks ul");
  taskList.removeChild(taskItem);

  tasks = tasks.filter(task => task !== taskItem.textContent);
  
  saveTasksToLocalStorage();
}

function taskFinish(checkbox) {
  let taskItem = checkbox.parentNode;
  taskItem.classList.toggle("checked");
}

function sortTasksByDate() {
  let taskList = document.querySelector(".tasks ul");
  let sortedTasks = tasks.sort((a, b) => new Date(a.taskDate) - new Date(b.taskDate));

  taskList.innerHTML = "";
  sortedTasks.forEach(task => {
    let newTaskItem = document.createElement("li");
    newTaskItem.innerHTML = `
      <input type="checkbox" onclick="taskFinish(this)">
      ${task.taskName} - ${task.taskDate}
      <button onclick="deleteTask(this.parentNode)">Excluir</button>
    `;
    taskList.appendChild(newTaskItem);
  });

  saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

window.addEventListener('DOMContentLoaded', () => {
  loadTasksFromLocalStorage();
});

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  } else {
    tasks = [];
  }
}

function renderTasks() {
  let taskList = document.querySelector(".tasks ul");
  taskList.innerHTML = "";
  tasks.forEach(task => {
    let newTaskItem = document.createElement("li");
    newTaskItem.innerHTML = `
      <input type="checkbox" onclick="taskFinish(this)">
      ${task.taskName} - ${task.taskDate}
      <button onclick="deleteTask(this.parentNode)">Excluir</button>
    `;
    taskList.appendChild(newTaskItem);
  });
}
