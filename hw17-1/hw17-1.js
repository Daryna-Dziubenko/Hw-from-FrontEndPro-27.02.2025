/*Створіть клас Calculator, який буде мати методи для виконання базових математичних операцій: додавання, віднімання, множення та ділення.

class Calculator {

 // Ваш код тут

}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4*/

class Calculator {
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
    multiply(x, y) {
        return x * y;
    }
    divide(x, y) {
        if (y === 0) {
            return "Ділення на нуль неможливе";
        }
        return x / y;
    }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 0)); // Ділення на нуль неможливе
console.log(calc.divide(8, 4)); // 2