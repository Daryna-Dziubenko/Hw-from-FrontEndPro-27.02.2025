/*Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
Вивести зображення, отримане випадковим чином (Math.random)*/

const images = [
  'hw11-3/1.jpg',
  'hw11-3/2.jpg',
  'hw11-3/3.jpg',
  'hw11-3/4.jpg'
];
const randomIndex = Math.floor(Math.random() * images.length);
const img = document.createElement('img');
img.style.width = '300px'; 
img.src = images[randomIndex];
img.alt = 'Random Image';
document.body.appendChild(img);

const button = document.createElement('button');
button.textContent = 'Change Image';
document.body.appendChild(button);

button.addEventListener('click', function() {
  const newIndex = Math.floor(Math.random() * images.length);
  img.src = images[newIndex];
});