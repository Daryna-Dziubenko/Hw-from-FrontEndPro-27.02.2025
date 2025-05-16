/*Написати функцію addToArray(array, number), яка додаватиме число в масив і повертатиме новий масив, 
де аrray -вхідний масив, пumber число яке потрібно додати. Якщо в масиві немає такого числа, то додати в кінець, 
якщо є щось нічого не робити. */
array = [8, 5, 7, 77, 105, 1, 3];
function addToArray(array, num){
    if (!array.includes(num)){
        array.push(num);
    }
    return array;
}

console.log(addToArray(array, 201));

/*Написати функцію sum(array), яка віддаватиме суму всіх чисел масиву*/
array = [9, 1, 5];
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}

console.log(sum(array));