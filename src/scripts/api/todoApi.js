import { request } from "../../utils/request";
import { apiPath } from "../constants/apiPath";

const todoPath = apiPath.TODOS

export const addTodoApi = async (todoData) => {
    try {
        await request(todoPath, 'POST', todoData)
    } catch (error) {
        console.log('Failed to add Todo: ', error);
    }
}

export const getTodosApi = async () => {
    try {
        const response = await request(todoPath, 'GET');
        return response;
    } catch (error) {
        console.log('Failed to get Todos: ', error);
    }
}

export const getTodoByIdApi = async (todoId) => {
    try {
        const response = await request(`${todoPath}/${todoId}`, 'GET');
        return response;
    } catch (error) {
        console.log('Failed to get Todo: ', error);
    }
}

export const updateTodoApi = async (todoId, todoData) => {
    try {
        const response = await request(`${todoPath}/${todoId}`, 'PUT', todoData);
        return response;
    } catch (error) {
        console.log('Failed to update Todo: ', error);
    }
}

export const deleteTodoApi = async (todoId) => {
    try {
        await request(`${todoPath}/${todoId}`, 'DELETE')
    } catch (error) {
        console.log('Failed to delete Todo: ', error);
    }
}