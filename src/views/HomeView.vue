<template>
  <div class="home">
    <div class="content">
      <h1>Welcome to the Task Management App</h1>
      <p>Organize your tasks efficiently and boost your productivity</p>
      <button @click="goToTasks" class="cta-button">Create a Task</button>
    </div>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToTasks() {
      this.$router.push('/tasks')
    }
  }
}
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f8;
  position: relative;
  overflow: hidden;
}

.content {
  text-align: center;
  z-index: 1;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #34495e;
  margin-bottom: 2rem;
}

.cta-button {
  padding: 12px 24px;
  font-size: 1.1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.cta-button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.cta-button:active {
  transform: translateY(0);
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #3498db, #8e44ad);
  opacity: 0.2;
  z-index: 0;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 10px 20px;
  }
}
</style>