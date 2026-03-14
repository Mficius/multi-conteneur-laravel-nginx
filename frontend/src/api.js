import axios from "axios";

const API = axios.create({
  baseURL: "/api"
});

export const getTodos = () => API.get("/todos");

export const createTodo = (todo) => API.post("/todos", todo);

export const deleteTodo = (id) => API.delete(`/todos/${id}`);