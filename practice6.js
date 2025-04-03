/*Потрібно створити функцію min(a,b), яка приймає 2 аргументи і повертає менше чисел. */
function massageMin(a, b){
    if (a<b){
        return a;
    } 
    else if (a === b){
        return `${a} i ${b} це однакові цифри`;
    }
    else {
        return b;
    }
    
}
let massageMin1 = massageMin(202, 585);
let massageMin2 = massageMin(-1, -1);
let massageMin3 = massageMin(10, 5);

console.log(massageMin1);
console.log(massageMin2);
console.log(massageMin3);

/*Потрібно написати функцію pow(x.л), яка повертає х до ступеня п. Інакше кажучи, множить х на себе п разів і повертає результат. */
function pow(x, n){
    return x**n;
}
let pow1 = pow(3, 2);
let pow2 = pow(2, 3);
let pow3 = pow(5, 2);

console.log(pow1);
console.log(pow2);
console.log(pow3);