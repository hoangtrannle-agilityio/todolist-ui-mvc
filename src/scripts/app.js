import TodoController from "./controllers/todoController";
import TodoModel from "./models/todoModel";
import TodoView from "./views/todoView";

new TodoController(new TodoModel(), new TodoView());
