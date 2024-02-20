import {
  addTodoApi,
  deleteTodoApi,
  getTodosApi,
  updateTodoApi,
} from "../api/todoApi";

export default class TodoModel {
  constructor() {
    this.todos = [];
  }

  addTodo = async (todoData) => {
    const response = await addTodoApi(todoData);
    this.todos.push(response);
    return this.todos;
  };

  getTodos = async () => {
    const response = await getTodosApi();
    this.todos = response;
    return this.todos;
  };

  updateTodo = async (todoId, todoData) => {
    const response = await updateTodoApi(todoId, todoData);
    const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex !== -1) this.todos[todoIndex] = response;
    return this.todos;
  };

  deleteTodo = async (todoId) => {
    await deleteTodoApi(todoId);
    const newTodos = this.todos.filter((todo) => todo.id !== todoId);
    this.todos = newTodos;
    return this.todos;
  };
}
