document.addEventListener('DOMContentLoaded', () => {
  const today = new Date().toLocaleDateString();
  document.getElementById('date-today').textContent = today;
});
const form = document.getElementById('task-form');
const taskInput = document.querySelector('.form_task');
const tasksList = document.getElementById('tasks');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    tasksList.appendChild(li);
    taskInput.value = ''; 
    saveTasks();
    loadTask()
  }
});