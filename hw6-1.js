/*Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.*/

function removeChars(text, word) {
    let newText = ''; 
    for (let i = 0; i < text.length; i++) {
      if (!word.includes(text[i])) {
        newText = newText + text[i];
      }
    }
    return newText;
}
let text = prompt('Enter text:');
let word = prompt('Enter some word for delete, for exemple: (mdf)');
  
let result = removeChars(text, word);
console.log(result);