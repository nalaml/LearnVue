import axios from 'axios';

const API_URL = 'http://localhost:8000'; 

const api = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export default {
  async getTasks() {
    const response = await api.get(`${API_URL}/get_tasks`);
    return response.data;
  },

  async addTask(task) {
    const response = await axios.post(`${API_URL}/add_task`, task);
    return response.data;
  },

  async updateTask(taskId, updatedTask) {
    const response = await axios.put(`${API_URL}/task/${taskId}`, updatedTask);
    return response.data;
  },

  async deleteTask(taskId) {
    console.log("called delete api");
    await axios.delete(`${API_URL}/task/${taskId}`);
  }
};