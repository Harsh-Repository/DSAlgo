// create an add task button which adds a task to the buttom of list

let list = [];

let addTaskButton = document.getElementById("addTaskButton");

addTaskButton.addEventListener("click", () => {
  list.push(document.getElementById("inputValue").value);
  console.log(list);
  document.getElementById("inputValue").value = "";
});

//create a delelte task button which removes the first task from the list
deleteTaskButton.addEventListener("click", () => {
  list.shift();
  console.log(list);
});
//display items in console
