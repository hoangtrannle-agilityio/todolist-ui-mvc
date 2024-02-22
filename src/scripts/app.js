import TodoController from "./controllers/todoController";
import TodoModel from "./models/todoModel";
import TodoView from "./views/todoView";

const todoModel = new TodoModel();
const todoView = new TodoView();
const todoController = new TodoController(todoModel, todoView);
todoController.init();
