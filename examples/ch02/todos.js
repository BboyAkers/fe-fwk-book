const addToDoInput = document.getElementById('todo-input')
const addToDoButton = document.getElementById('add-todo-btn')
const todoList = document.getElementById('todos-list')

const todos = ['Walk the dog', 'Water the plants', 'Sand the chairs']

function renderTodoInReadMode(todo) {
  const li = document.createElement('li')

  const span = document.createElement('span')
  span.textContent = todo
  span.addEventListener('dblclick', () => {
    const idx = todos.indexOf(todo)

    todosList.replaceChild(
      renderTodoInEditMode(todo),
      todosList.childNodes[idx]
    )
  })
  li.append(span)

  const button = document.createElement('button')
  button.textContent = 'Done'
  button.addEventListener('click', () => {
    const idx = todos.indexOf(todo)
    removeTodo(idx)
  })
  li.append(button)

  return li
}

for (const todo of todos) {
  todosList.append(renderTodoInReadMode(todo))
}

addTodoInput.addEventListener('input', () => {
  addTodoButton.disabled = addTodoInput.value.length < 3
})

addTodoInput.addEventListener('keydown', ({ key }) => {
  if (key === 'Enter' && addTodoInput.value.length >= 3) {
    addTodo()
  }
})

addTodoButton.addEventListener('click', () => {
  addTodo()
})

// Functions
function renderTodoInReadMode(todo) {
  // TODO: implement me!
}

function addTodo() {
  // TODO: implement me!
}
