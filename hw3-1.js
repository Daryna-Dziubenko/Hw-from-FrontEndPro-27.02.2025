/*Створити репозиторій із файлом index.html.
Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль. Використовуючи оператор typeof та console.log*/

let myname='Dasha';
let age=18;
let bigInt=95448521484221552n;
let thisapple=false;
let store=null;
let shop;
let symbolType = Symbol("символ");
let myObject={
    name:'Daryna',
    age:19,
    city:'Kyiv',
};
let arr=[5, 15, 'skelar', true];
let text = function() {
    console.log('Hello from function')
};

console.log(myname + ' - ' + typeof myname);
console.log(age + ' - ' + typeof age);
console.log(bigInt + ' - ' + typeof bigInt);
console.log(thisapple + ' - ' + typeof thisapple);
console.log(store + ' - ' + typeof store);
console.log('змінна shop - ' + typeof shop);
console.log('змінна symbolType - ' + typeof symbolType);
console.log(myObject.name + ' - ' + typeof myObject);
console.log(arr + ' - ' + typeof arr);
console.log(text + ' - ' + typeof text);