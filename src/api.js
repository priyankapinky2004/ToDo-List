import axios from "axios";

const API_URL = "https://your-api-gateway-url.com/todos"; // Replace with your API Gateway URL

// Fetch all todos
export const getTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Add a new todo
export const addTodo = async (task) => {
    const response = await axios.post(API_URL, { task });
    return response.data;
};

// Update a todo
export const updateTodo = async (id, completed) => {
    const response = await axios.put(API_URL, { id, completed });
    return response.data;
};

// Delete a todo
export const deleteTodo = async (id) => {
    const response = await axios.delete(API_URL, { data: { id } });
    return response.data;
};