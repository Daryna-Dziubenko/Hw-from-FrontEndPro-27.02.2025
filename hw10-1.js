/*Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. 
Створіть метод об'єкту для отримання та відображення цих даних.*/

const user = {
    name: 'Daryna',
    age: 18,
    city: 'Kyiv',
    showInfo: function() {
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}, Місто: ${this.city}`);
  }
};

user.showInfo();