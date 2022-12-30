import { Task } from "./tasks.js";
import { tm } from "./task-manager.js";
import { Status } from "./status.js";
const tasksDiv = document.getElementById("tasks") as HTMLDivElement;
const todoDescription = document.getElementById(
  "todo-description"
) as HTMLInputElement;
const btnAddTodo = document.getElementById("btn-add-todo") as HTMLButtonElement;
let tasks: Task[] = [];
btnAddTodo.addEventListener("click", () => {
  let text = todoDescription.value;
  let task = new Task(text);
  tm.addTask(task);

  console.log(todoDescription.value);
  //console.log(task);
  // tasks.push(task);
  //remove all children from tasksDiv
  //tasksDiv.replaceChildren();

  //add the task to tasksDiv
  addTaskToHTML(task);

  const reference = localStorage.getItem("todos");
  if (reference) {
    tasks = JSON.parse(reference);
    tasks.push(task);
  }
  localStorage.setItem("todos", JSON.stringify(tasks));
});

function showAllTasks() {
  const reference = localStorage.getItem("todos");
  // if reference exists
  if (reference) {
    let tasks = JSON.parse(reference);
    tasks.forEach((element: Task) => {
      addTaskToHTML(element);
    });
  }
}
console.log(tm.tasks);

showAllTasks();
function addTaskToHTML(task: Task) {
  let row = document.createElement("div");
  row.classList.add("task", "row");
  row.id = task.timeStamp;
  let input = document.createElement("input");
  input.classList.add("col-6");
  input.placeholder = "description";
  input.disabled = true; //when edit is clicked => disable = false
  input.value = task.description;

  input.addEventListener("input", () => {
    task.description = input.value;
    tm.updateTask(task);
  });

  let btnEdit = document.createElement("button");
  btnEdit.classList.add("btn", "btn-info", "col", "text-light");
  btnEdit.innerHTML = 'Edit: <i class="bi bi-pencil-square"></i>';
  btnEdit.addEventListener("click", () => {
    input.disabled = !input.disabled;
  });

  let btnDelete = document.createElement("button");
  btnDelete.classList.add("btn-sm", "btn", "btn-danger", "col");
  btnDelete.innerHTML = 'Delete: <i class="bi bi-trash3-fill"></i>';
  btnDelete.addEventListener("click", () => {
    tm.removeTask(task.timeStamp);
    deleteTaskFromHTML(task);
  });
  let btnComplete = document.createElement("button");
  btnComplete.classList.add("btn", "bg-warning", "col", Status[0]);
  btnComplete.innerHTML = '<i class="bi bi-square"></i>';
  /* btnComplete.style.fontSize = "20px"; */
  btnComplete.addEventListener("click", () => {
    if (btnComplete.classList.contains(Status[0])) {
      btnComplete.innerHTML = '<i class="bi bi-check-square"></i>';
      btnComplete.classList.remove(Status[0], "bg-warning");
      btnComplete.classList.add(Status[1], "bg-success");
    } else if (btnComplete.classList.contains(Status[1])) {
      btnComplete.innerHTML = '<i class="bi bi-square"></i>';

      btnComplete.classList.remove(Status[1], "bg-success");
      btnComplete.classList.add(Status[0], "bg-warning");
    }
  });

  row.appendChild(input);
  row.appendChild(btnEdit);
  row.appendChild(btnDelete);
  row.appendChild(btnComplete);

  tasksDiv.appendChild(row);
}
function deleteTaskFromHTML(task: Task) {
  let delItem = document.getElementById(task.timeStamp)?.remove();
}
