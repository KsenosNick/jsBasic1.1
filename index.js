let n = Math.floor(Math.random() * 1000);
console.log("Загадано число " + n);

while (true) {
    let userNumber = prompt("Введите число от 0 до 999")
    console.log('Введено: ', userNumber)
    if (userNumber == "Пока!") {
        alert("До свидания!");
        break;
    } 
    if (isNaN(userNumber))  {
        alert("Введено не число!");
    } else if (userNumber == null) {
        break;
    } else if (userNumber > 1000 || userNumber < 0) {
        alert("Введено число вне указанного диапазона!");
    } else if (userNumber < n) {
        alert("Число меньше загаданного");
    } else if (userNumber > n) {
        alert("Число больше загаданного");
    } else {
        alert("Вы угадали!");
        break;
    }
}