/*Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:

Поля:

Name - обов'язкове текстове поле
Message - текстове поле не менше 5 символів
Phone number - обов'язкове поле типу phone. З початком на +380
Email - email обов'язково повинен мати @ та крапку
Після відправки, в консоль відображаємо дані, які ввів користувач.

Під час помилки показувати її під полем.*/

const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

const nameError = document.getElementById('nameError');
const messageError = document.getElementById('messageError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (messageInput.value.length < 5) {
        messageError.textContent = 'Message must be at least 5 characters';
        isValid = false;
    } else {
        messageError.textContent = '';
    }

    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = 'Phone must start with +380 and contain 9 digits';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    const emailValue = emailInput.value;
    if (!emailValue.includes('@') || !emailValue.includes('.')) {
        emailError.textContent = 'Email must contain "@" and "."';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (isValid) {
        console.log("Name:", nameInput.value);
        console.log("Message:", messageInput.value);
        console.log("Phone:", phoneInput.value);
        console.log("Email:", emailInput.value);
    }
});