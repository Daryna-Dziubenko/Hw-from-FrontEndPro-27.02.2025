/*Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). 
Функція повинна повертати результат (у середині функції не має бути консоль лога!)*/

function dobutok(a){
    return function (c) {
        return a * c;
    }
}
let result = dobutok(5)(2);
console.log(result); 