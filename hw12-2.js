/*Створіть HTML-сторінку з декількома кнопками. Ваше завдання - створити обробник подій для батьківського елементу, 
який відслідковуватиме кліки на всіх кнопках.

Покроковий план:
1. Створіть HTML-елементи: батьківський контейнер з декількома вкладеними кнопками.
2. Додайте обробник подій до батьківського контейнера, який відслідковуватиме кліки.
3. Після кліку на будь-якій кнопці, виведіть повідомлення про те, яка саме кнопка була клікнута.*/

const buttonContainer = document.getElementById("buttonContainer");

buttonContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const clickedItemText = event.target.textContent;
        alert("Клікнуто по кнопці: " + clickedItemText);
    }
});