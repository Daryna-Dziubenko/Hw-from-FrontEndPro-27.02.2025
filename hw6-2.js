/*Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.*/

let array = ['hello', 65, 9, true, 5, 'world', 3, 'JS', false, 1];
function credznoch() {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] == 'number') {
        sum=sum+array[i];
        count++;
      }
    }
    if (count===0){
        return 0;
    }
    return sum/count;
}
let result = credznoch();
console.log(result); 