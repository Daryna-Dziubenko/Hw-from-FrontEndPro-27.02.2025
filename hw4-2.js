/*Дано тризначне число, яке надае користувач, потрибно визначити:

Чи правда, що всі цифри однакові?
Чи є серед цифр цифри однакові?*/

const number = (prompt('Введіть будь ласка трьохзначне число:'));
if (number >= 100 && number <= 999) {
    let a = Math.floor(number/100);
    let b = Math.floor((number%100)/10);
    let c = number%10;
    switch (true) {
        case a===b && b===c:
            console.log("Усі цифри однакові");
            break;
        case  a===b || b===c || c===a:
            console.log("Є дві однакові цифри");
            break;
        default:
            console.log("Усі цифри різні");
            break;
    }
} else{
    alert('Ви ввели не трьохзначне число');
}
