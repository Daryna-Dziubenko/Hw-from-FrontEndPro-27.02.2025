/*Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
Copy code
let ladder = {
  up: function () { // підніматиме вас на одну сходинку
  },
  down: function () { // опускатиме вас на одну сходинку
  },
  showStep: function () { // показує поточну сходинку
  }
};
Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
ladder.up().up().down().showStep(); // 1
Такий підхід широко використовується в бібліотеках JavaScript.*/

function Ladder(){
  this.step=0;
  this.up=function(){
    this.step++;
    return this;
  }
  this.down=function(){
    this.step--;
    return this;
  }
  this.showStep=function(){
    return this.step;
  }
}

let ladder = new Ladder();
console.log(ladder.up().up().down().showStep());//1
let ladder1 = new Ladder();
console.log(ladder1.up().up().up().up().up().down().showStep());//4