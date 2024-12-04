// Get elements from the DOM
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText !== '') {
    const listItem = document.createElement('li');
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    // Create the remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.onclick = function () {
      todoList.removeChild(listItem);
    };
    listItem.appendChild(removeButton);

    // Add event listener to toggle "done" status
    listItem.onclick = function () {
      listItem.classList.toggle('done');
    };

    // Append the list item to the todo list
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = '';
  }
}

// Add task when the "Add Task" button is clicked
addButton.onclick = addTask;

// Allow adding a task by pressing Enter
todoInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
