/*Переробити ToDo-list з використанням Jquery
За допомогою Bootstrap створити модальне вікно до TODO list, яке по кліку на завдання буде показувати вікно з його текстом*/

const $taskInput = $('#taskInput');
const $addTaskButton = $('#addTaskButton');
const $taskList = $('#taskList');

$('#addTaskButton').on('click', function() {
    const taskText = $taskInput.val().trim();
    if (taskText) {
      const $newTaskItem = $(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="task-text" style="cursor: pointer;">${taskText}</span>
          <button class="deleteBtn btn btn-danger btn-sm">Видалити</button>
        </li>
      `);
      $taskList.append($newTaskItem);
      $taskInput.val('');
    } else {
      alert('Будь ласка, введіть завдання.');
    }
});
  
$taskList.on('click', function(event) {
    const $target = $(event.target);
    
    if ($target.hasClass('deleteBtn')) {
      $target.closest('li').remove();
    }
    
    if ($target.hasClass('task-text')) {
      const taskContent = $target.text();
      $('#modalTaskText').text(taskContent);
      
      const myModal = new bootstrap.Modal($('#taskModal')[0]);
      myModal.show();
    }
});