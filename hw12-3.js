/*Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. Ваше ціль - 
використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.

Покроковий план:

1 Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
2 Додайте обробник подій до списку завдань ul, використовуючи делегування.
3 При кліку на будь-якій кнопці видалення, видаліть цей пункт.
4 Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.*/

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

//кнопка "Додати"
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const newTaskItem = document.createElement("li");
        newTaskItem.innerHTML = `
          <span>${taskText}</span>
          <button class="deleteBtn">Видалити</button>
        `;
        taskList.appendChild(newTaskItem);
        taskInput.value = "";
    } else {
        alert("Будь ласка, введіть завдання.");
    }
});

taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
        event.target.parentElement.remove();
    }
});