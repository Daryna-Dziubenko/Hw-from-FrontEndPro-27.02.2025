/*Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. 
При повторному натисканні – повертається попередній колір*/
let isRed = false;
document.getElementById("colorButton").addEventListener("click", function() {
  const paragraph = document.getElementById("textBlock");

  if (isRed === true) {
    paragraph.style.color = "black";
  } else {
    paragraph.style.color = "red";
  }

  isRed = !isRed;
});