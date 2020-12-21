// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var scelta = prompt('Scegli tra pari o dispari');
var numero = parseInt(prompt('Scegli un numero da 1 a 5'))

console.log(scelta);
console.log(numero);

var pcNumber = Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
console.log(pcNumber);

var somma = numero + pcNumber
console.log(somma);

if (somma % 2 == 0 && scelta == 'pari') {
  console.log('Hai vinto');
}else {
  console.log('hai perso');
}
