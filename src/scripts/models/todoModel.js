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
    await addTodoApi(todoData);
  };

  getTodos = async () => {
    const response = await getTodosApi();
    this.todos = response;
    return this.todos;
  };

  updateTodo = async (todoId, todoData) => {
    await updateTodoApi(todoId, todoData);
  };

  deleteTodo = async (todoId) => {
    await deleteTodoApi(todoId);
  };
}
