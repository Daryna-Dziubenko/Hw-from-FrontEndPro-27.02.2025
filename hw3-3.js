/*Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. Приклад:
10369
1 0 3 6 9*/
let num = (prompt('Введіть пятизначне число'));
let num1 = Math.floor(num / 10000);
let num2 = Math.floor((num % 10000) / 1000);
let num3 = Math.floor((num % 1000) / 100);
let num4 = Math.floor((num % 100) / 10);
let num5 = num % 10;
console.log(num);
console.log(`${num1} ${num2} ${num3} ${num4} ${num5}`)
