/*Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, 
що не має інших дільників, крім 1 і себе).*/

let num = Number(prompt("Введи число:"));
if (num <= 1) {
  alert("Число не є простим");
} else {
  let numb = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        numb = false;
        break;
    }
  }
  if (numb) {
    alert("Число просте");
  } else {
    alert("Число не є простим");
  }
}2