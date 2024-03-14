/*
    Snack2
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
    Ogni volta che ne crei uno, stampalo.
 */

let userNum = parseInt(prompt('Inserisci un numero'));

while (isNaN(userNum)){
    userNum = parseInt(prompt('Non è un numero, riprova'));
}

function createArray(n) {
    
  }