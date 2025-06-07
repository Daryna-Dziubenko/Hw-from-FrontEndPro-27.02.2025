/*Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ar = [];
function newArr(){
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            ar.push(numbers[i]);
        }
    }
    return ar;
}
console.log(newArr(numbers));