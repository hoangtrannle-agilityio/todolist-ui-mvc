import { createElement, getElement } from "../utils/uiControl";

export default class TodoView {
  constructor() {
    this.saveBtn = getElement("#save-btn");
    this.input = getElement("#input");
    this.todoList = getElement(".todo-list");
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = "";
  }

  addTodo = (handler) => {
    this.saveBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const todoData = {
        job: this.input.value,
        isCompleted: false,
      };
      handler(todoData);
      this._resetInput();
    });
  };
}
