import { todoItemTemplate } from "../templates/todoItem";
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
      const { id, title, isCompleted } = todo;
      const todoItem = createElement("tr");
      todoItem.id = todo.id;
      todoItem.innerHTML = todoItemTemplate(index, id, title, isCompleted);

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
          title:
            e.target.parentElement.parentElement.querySelector("td")
              .textContent,
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
