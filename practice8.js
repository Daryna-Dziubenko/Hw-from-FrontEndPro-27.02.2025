/*let skill = {
    name: 'html',
    level: 5,
    full: function(){
        return `${this.name} - ${this.level}`;
    }
}
console.log(skill.full());*/

/*Створити конструктор "Калькулятор". Який отримуватиме в момент створення 2 числа. 
Конструктор повинен мати метод:
getPlus 
getMinus 
На основі конструктора створити 2 об'єкты з можливістю отримання результатів складання чисел, та значень ціх чисел.*/
function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    this.getPlus = function() {
        return this.num1 + this.num2;
    };

    this.getMinus = function() {
        return this.num1 - this.num2;
    };
}
let pr1 = new Calculator(5, 3);
console.log(pr1.getPlus()); // 8
console.log(pr1.getMinus()); // 2
