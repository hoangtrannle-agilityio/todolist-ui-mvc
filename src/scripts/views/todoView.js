import { createElement, getElement } from "../utils/uiControl";

export default class TodoView {
  constructor() {
    this.saveBtn = getElement("#save-btn");
    this.input = getElement("#input");
    this.todoList = getElement(".todo-list");
    this.deleteBtn = getElement(".btn-btn");
    this.finishBtn = getElement(".btn-btn");
  }

  addTodo = (handler) => {
    this.saveBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.input.value === "") return;
      const todoData = {
        title: this.input.value,
        isCompleted: false,
      };
      handler(todoData);
      this.input.value = "";
    });
  };

  displayTodos = (todos) => {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    todos.forEach((todo, index) => {
      //Init todo item
      const todoItem = createElement("tr");
      todoItem.id = todo.id;

      const todoIndex = createElement("th");
      todoIndex.textContent = index + 1;

      const todoTitle = createElement("td");
      todoTitle.textContent = todo.title;

      const todoStatus = createElement("td");
      todoStatus.textContent = todo.isCompleted ? "Completed" : "In progress";

      const todoAction = createElement("td");
      const deleteBtn = createElement("button", "btn btn-danger btn-delete");
      deleteBtn.setAttribute("type", "submit");
      deleteBtn.textContent = "Delete";
      const finishBtn = createElement(
        "button",
        "btn btn-success ms-1 btn-finish"
      );
      finishBtn.setAttribute("type", "button");
      finishBtn.textContent = "Finish";
      todoAction.append(deleteBtn, finishBtn);

      //Append children to todo item
      todoItem.append(todoIndex, todoTitle, todoStatus, todoAction);

      //Append item to todo list
      this.todoList.append(todoItem);
    });
  };

  finishTodo = (handler) => {
    this.todoList.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className.includes("btn-finish")) {
        const id = e.target.parentElement.parentElement.id;
        const todoDataUpdate = {
          isCompleted: true,
        };
        handler(id, todoDataUpdate);
      }
    });
  };

  deleteTodo = (handler) => {
    this.todoList.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className.includes("btn-delete")) {
        const id = e.target.parentElement.parentElement.id;
        handler(id);
      }
    });
  };
}
