/*Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. 
Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.*/

const contactBook = {
  contacts: [
    {
      name: "Олена Іваненко",
      phone: "+380501234567",
      email: "olena.ivanenko@gmail.com"
    },
    {
      name: "Андрій Шевченко",
      phone: "+380931112233",
      email: "andriy.shevchenko@gmail.com"
    },
    {
      name: "Марія Коваль",
      phone: "+380673334455",
      email: "maria.koval@gmail.com"
    }
  ],
findContactByName(name) {
    for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].name === name) {
            return this.contacts[i];
        }
    }
}
};

contactBook.contacts.unshift(
{
    name: "Іван Петров",
    phone: "+380501234567",
    email: "ivan007@gmail.com"
});

console.log(contactBook);
console.log(contactBook.findContactByName("Андрій Шевченко"));