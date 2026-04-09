const state = {
  tasks: [],
  filter: 'all',
};

const elements = {
  form: document.getElementById('taskForm'),
  titleInput: document.getElementById('taskTitle'),
  tasksList: document.getElementById('tasks'),
  filterButtons: Array.from(document.querySelectorAll('.filter-button')),
};

function createTaskItem(task) {
  const listItem = document.createElement('li');
  listItem.className = `task-item${task.completed ? ' completed' : ''}`;

  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.dataset.id = task.id;
  checkbox.addEventListener('change', () => toggleTaskCompletion(task.id));

  const title = document.createElement('span');
  title.textContent = task.title;

  label.append(checkbox, title);

  const actionButton = document.createElement('button');
  actionButton.type = 'button';
  actionButton.textContent = task.completed ? 'Undo' : 'Complete';
  actionButton.addEventListener('click', () => toggleTaskCompletion(task.id));

  listItem.append(label, actionButton);
  return listItem;
}

function getFilteredTasks() {
  switch (state.filter) {
    case 'active':
      return state.tasks.filter(task => !task.completed);
    case 'completed':
      return state.tasks.filter(task => task.completed);
    default:
      return state.tasks;
  }
}

function renderTasks() {
  const visibleTasks = getFilteredTasks();
  elements.tasksList.innerHTML = '';

  if (visibleTasks.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.className = 'empty-state';
    emptyMessage.textContent = 'No tasks available. Add your first task to get started.';
    elements.tasksList.append(emptyMessage);
    return;
  }

  visibleTasks.forEach(task => {
    elements.tasksList.append(createTaskItem(task));
  });
}

function addTask(title) {
  const taskTitle = title.trim();
  if (!taskTitle) return;

  state.tasks.push({
    id: `${Date.now()}`,
    title: taskTitle,
    completed: false,
  });

  elements.titleInput.value = '';
  renderTasks();
}

function toggleTaskCompletion(taskId) {
  const task = state.tasks.find(item => item.id === taskId);
  if (!task) return;
  task.completed = !task.completed;
  renderTasks();
}

function setFilter(filterName) {
  state.filter = filterName;
  elements.filterButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.filter === filterName);
  });
  renderTasks();
}

elements.form.addEventListener('submit', event => {
  event.preventDefault();
  addTask(elements.titleInput.value);
});

elements.filterButtons.forEach(button => {
  button.addEventListener('click', () => setFilter(button.dataset.filter));
});

renderTasks();
