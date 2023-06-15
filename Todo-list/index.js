let tasks = [];
let taskCount = 0;
let taskInput = document.getElementById("taskInput");
let dateInput = document.getElementById("dateInput");

window.onload = () => {
  const previousTasks = JSON.parse(localStorage.getItem("tasks"));
  tasks = previousTasks;
  if (previousTasks) {
    let taskList = document.querySelector(".tasks ul");
    previousTasks.forEach((task) => {
      let newTaskItem = document.createElement("li");
      if(task.completed) {
        newTaskItem.classList.toggle("checked");
      }

      newTaskItem.innerHTML =
        `<input type="checkbox" ${task.completed ? 'checked' : ''} onclick="taskFinish(${task.id}, this)">` +
        task.taskName +
        " - " +
        task.taskDate +
        `<button onclick="removeTask(${task.id}, this.parentNode)"> X </button>`;
      taskList.appendChild(newTaskItem);
    });
  }
};

function createTask() {
  taskCount += 1;
  const task = {
    id: taskCount,
    taskName: taskInput.value,
    taskDate: dateInput.value,
    completed: false
  };

  tasks.push(task);

  let taskList = document.querySelector(".tasks ul");
  let newTaskItem = document.createElement("li");
  newTaskItem.innerHTML =
  `<input type="checkbox" onclick="taskFinish(${task.id}, this)">` +
    task.taskName +
    " - " +
    task.taskDate +
    `<button onclick="removeTask(${task.id}, this.parentNode)"> X </button>`;
  taskList.appendChild(newTaskItem);

  taskInput.value = "";
  dateInput.value = "";

  localStorage.setItem("tasks", "[" + tasks.map(task => JSON.stringify(task)).join(",") + "]");
}

function taskFinish(taskId, checkbox) {
  let taskItem = checkbox.parentNode;
  taskItem.classList.toggle("checked");
  tasks.forEach(task => {
    if(task.id === taskId) {
      task.completed = !task.completed;
    }
  });
  localStorage.setItem("tasks", "[" + tasks.map(task => JSON.stringify(task)).join(",") + "]");
}

function sortTasksByDate() {
  let taskList = document.querySelector(".tasks ul");
  let sortDate = tasks.sort(
    (a, b) => new Date(a.taskDate) - new Date(b.taskDate)
  );

  // console.log(sortDate)
  taskList.innerHTML = "";
  sortDate.forEach(function (task) {
    let newTaskItem = document.createElement("li");
    if(task.completed) {
      newTaskItem.classList.toggle("checked");
    }
    newTaskItem.innerHTML =
      `<input type="checkbox" ${task.completed ? 'checked' : ''} onclick="taskFinish(${task.id}, this)">` +
      task.taskName +
      " - " +
      task.taskDate +
      `<button onclick="removeTask(${task.id}, this.parentNode)"> X </button>`;
    taskList.appendChild(newTaskItem);
  });
}

function removeTask(taskId, taskElement) {
  let taskList = document.querySelector(".tasks ul");
  taskList.removeChild(taskElement);

  tasks = tasks.filter(task => task.id != taskId);
  localStorage.setItem("tasks", "[" + tasks.map(task => JSON.stringify(task)).join(",") + "]");
}

