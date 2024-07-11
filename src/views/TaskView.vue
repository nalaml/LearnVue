<template>
  <div class="tasks">
    <h1>Task Management App</h1>
    <task-form @add-task="addTask"></task-form>
    <task-list 
      :tasks="tasks" 
      @delete-task="deleteTask" 
      @save-task="updateTask"
    ></task-list>
  </div>
</template>

<script>
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
import api from '../services/api'

export default {
  name: 'TaskView',
  components: {
    TaskForm,
    TaskList
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await api.getTasks();
        this.tasks = response;
        console.log('Fetched tasks:', this.tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async addTask(task) {
      try {
        console.log('Adding task:', task);
        const newTask = await api.addTask(task);
        console.log('New task added:', newTask);
        await this.fetchTasks();  // Refresh the task list
      } catch (error) {
        console.error('Error adding task:', error);
      }
    },
    async updateTask(updatedTask) {
      try {
        const task = await api.updateTask(updatedTask.id, updatedTask);
        const index = this.tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
          this.tasks[index] = task;
        }
        console.log('Updated task:', task);
      } catch (error) {
        console.error('Error updating task:', error);
      }
    },
    async deleteTask(taskId) {
      try {
        await api.deleteTask(taskId);
        alert('Task deleted successfully!');
        console.log('Deleted task with id:', taskId);
        await this.fetchTasks();  // Refresh the task list
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  },
  mounted() {
    this.fetchTasks();
  }
}
</script>

<style scoped>
.tasks {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}
</style>