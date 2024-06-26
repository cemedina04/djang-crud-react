import axios from 'axios'

const taskapi = axios.create({
    baseURL: 'http://localhost:8000/task/api/v1/task/',
});

export const getAllTask = () => taskapi.get("/");

export const getTask = (id) => taskapi.get('/${id}/');

export const createTask = (task) => taskapi.post("/", task);

export const deleteTask = (id) => taskapi.delete('/${id}');

export const updateTask = (id, task) => taskapi.put('/${id}/', 
task);
