/*На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, 
при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).*/

const buttons = document.getElementById('buttons');
const inputButton = buttons.querySelector('button:nth-child(1)');
const redirectButton = buttons.querySelector('button:nth-child(2)');
let userLink = '';
inputButton.addEventListener('click', function() {
  userLink = prompt('Введіть посилання:');
  if (userLink) {
    alert(`Посилання збережено: ${userLink}`);
  } else {
    alert('Посилання не введено.');
  }
});
redirectButton.addEventListener('click', function() {
  if (userLink) {
    window.location.href = userLink;
  } else {
    alert('Посилання не введено.');
  }
});