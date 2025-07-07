/*Доробити TODO лист, в якому буде можливість:

Додати завдання
Видалити завдання
Відзначити як виконану
Усі дані повинні зберегтися після перезавантаження сторінки.*/

const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

let todos = [];

form.onsubmit = e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    todos.push({ id: Date.now(), text, completed: false });
    saveAndRender();
    input.value = '';
};

function saveAndRender() {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderAll();
}

function renderAll() {
    todosWrapper.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        if (todo.completed) li.classList.add('todo-item--checked');
        li.dataset.id = todo.id;

        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="todo-item__description">${todo.text}</span>
            <button class="todo-item__delete">Видалити</button>
        `;

        li.querySelector('input[type="checkbox"]').onchange = () => {
            todo.completed = !todo.completed;
            saveAndRender();
        };

        li.querySelector('.todo-item__delete').onclick = () => {
            todos = todos.filter(t => t.id !== todo.id);
            saveAndRender();
        };

        todosWrapper.appendChild(li);
    });
}

function loadTodos() {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    renderAll();
}

loadTodos();