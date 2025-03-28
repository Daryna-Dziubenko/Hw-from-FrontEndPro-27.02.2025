/*За допомогою prompt запитати “ім'я користувача”.
За допомогою alert вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач*/

let personname = prompt('Enter your name, pleas');
if (personname !== null){
    alert(`Hello, ${personname}! How are you?`);
} else{
    alert("I don't know your name");
}