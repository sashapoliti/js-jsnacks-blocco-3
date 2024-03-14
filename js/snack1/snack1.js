// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let num = [];
let sum = 0;
while (sum < 50) {
    userNum = parseInt(prompt('Inserisci un numero'));
    sum += userNum;
    num.push(userNum);
}; 
console.log(sum);