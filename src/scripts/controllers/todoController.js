export default class TodoController {
  constructor(todoModel, todoView) {
    this.todoModel = todoModel;
    this.todoView = todoView;
  }

  async init() {
    this.todoView.addTodo(this.handleAddTodo);
    await this.handleGetTodos();
    this.todoView.finishTodo(this.handleUpdateTodo);
    this.todoView.deleteTodo(this.handleDeleteTodo);
  }

  handleAddTodo = async (todoData) => {
    await this.todoModel.addTodo(todoData);
    await this.handleGetTodos();
  };

  handleGetTodos = async () => {
    const response = await this.todoModel.getTodos();
    this.todoView.displayTodos(response);
  };

  handleUpdateTodo = async (todoId, todoData) => {
    await this.todoModel.updateTodo(todoId, todoData);
    await this.handleGetTodos();
  };

  handleDeleteTodo = async (todoId) => {
    await this.todoModel.deleteTodo(todoId);
    await this.handleGetTodos();
  };
}
