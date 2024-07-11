<template>
  <div class="task-list">
    <table v-if="tasks.length > 0">
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.title }}</td>
          <td>
            <select v-model="task.status">
              <option value="assigned">Assigned</option>
              <option value="inprogress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </td>
          <td>
            <button @click="saveTask(task)" class="save-btn">Save</button>
            <button @click="$emit('delete-task', task.id)" class="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No tasks available. Add a task to get started!</p>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    tasks: Array
  },
  methods: {
    async saveTask(task) {
  try {
    await this.$emit('save-task', task);
    alert('Task status updated successfully!');
  } catch (error) {
    console.error('Error saving task:', error);
    alert('Error updating task status. Please try again.');
  }
}
  }
}
</script>

<style scoped>
.task-list {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

th, td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
}

tr:hover {
  background-color: #f5f5f5;
}

select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
}

.save-btn, .delete-btn {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 5px;
}

.save-btn {
  background-color: #4CAF50;
  color: white;
}

.save-btn:hover {
  background-color: #45a049;
}

.delete-btn {
  background-color: #f44336;
  color: white;
}

.delete-btn:hover {
  background-color: #d32f2f;
}
</style>