// const nlwSetup = new NLWSetup(form);
const tasks = [];

// criar tarefa
function createTask() {
  let taskInput = document.getElementById("taskInput");
  let dateInput = document.getElementById("dateInput");

  const task = {
    taskName: taskInput.value,
    taskDate: dateInput.value,
  };

  tasks.push(task);

  // let taskDiv = (document.querySelector(".tasks").innerHTML =
  //   '<div class="task"> <h4> <input type="checkbox" name="checkboxInput" id="checkboxInput" onclick="taskFinish()">' +
  //   task.taskName +
  //   " " +
  //   task.taskDate +
  //   "</h4></div>");
  let taskDiv = (document.querySelector(".tasks ul").innerHTML +=
    '<li id="teste"> <input type="checkbox" name="checkboxInput" id="checkboxInput" onclick="taskFinish()">' + task.taskName + ' - ' + task.taskDate + '</li>');
}

// ordenar por data

// remover

// tarefa finalizada

function taskFinish() {
  let checkbox = document.getElementById("checkboxInput");
  let classCheck = document.querySelector(".tasks ul li");

  console.log(classCheck)

  if (checkbox.checked) {
    // console.log("O cliente marcou o checkbox");
    // classCheck = document.documentElement.classList.toggle("checked")
    // classCheck.classList.add("checked");

    // document.classCheck.style.textDecoration = "line-through";

    document.getElementById("teste").style.textDecoration = "line-through";
  } else if (checkbox.unchecked) {
    // console.log("O cliente não marcou o checkbox");
    document.getElementById("teste").style.textDecoration = "none";
  }
}

// salvar no cache

// function save() {
//     localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
//   }

// drag and drop
