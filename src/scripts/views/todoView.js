import { toastMessage } from "../constants/toastMessage";
import { todoItemTemplate } from "../templates/todoItem";
import { closeModal, openModal } from "../utils/modalControl";
import { showToast } from "../utils/toastControl";
import { createElement, getElement } from "../utils/uiControl";

export default class TodoView {
  constructor() {
    this.saveBtn = getElement("#save-btn");
    this.input = getElement("#input");
    this.todoList = getElement(".todo-list");
    this.deleteBtn = getElement(".btn-delete");
    this.finishBtn = getElement(".btn-finish");
    this.errorMessage = getElement(".error-message");
    this.deleteModal = getElement(".delete-modal");
    this.confirmDeleteBtn = getElement(".btn-confirm-delete");
    this.closeModalBtn = getElement(".btn-close-modal");
    this.cancelModalBtn = getElement(".btn-cancel-modal");
  }

  resetInput = () => {
    this.input.value = "";
  };

  addTodo = (handler) => {
    this.saveBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.input.value === "") {
        this.errorMessage.textContent = "Task is required !";
        return;
      }
      const todoData = {
        title: this.input.value,
        isCompleted: false,
      };
      handler(todoData);
      showToast(toastMessage.ADDED_SUCCESS);
      this.resetInput();
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
        openModal(".delete-modal");
        this.confirmDeleteBtn.addEventListener("click", (e) => {
          e.preventDefault();
          handler(id);
          showToast(toastMessage.DELETED_SUCCESS);
          closeModal(".delete-modal");
        });
        this.cancelModalBtn.addEventListener("click", (e) => {
          e.preventDefault();
          closeModal(".delete-modal");
        });
      }
    });
  };
}
