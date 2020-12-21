// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//Inserire se pari o dispari
var scelta = prompt('Scegli tra pari o dispari');
var sceltaMin = scelta.slice(0).toLowerCase();

if (sceltaMin != 'pari' && sceltaMin != 'dispari'){
  alert('Hai inserito una scelta sbagliata, \nricarica la pagina!')
}

//inserire un numero da 1 a 5
var numero = parseInt(prompt('Scegli un numero da 1 a 5'))

 if (numero > 5 || numero < 1) {
  alert('Hai inserito un numero sbagliato, \nricarica la pagina!')
}

console.log(sceltaMin);
console.log(numero);

//numero generato casulamente da 1 a 5
var pcNumber = Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
console.log(pcNumber);

//somma dei numeri
var somma = numero + pcNumber
console.log(somma);

//senza funzione
// if (somma % 2 == 0 && sceltaMin == 'pari') {
//   console.log('Hai vinto');
// }else {
//   console.log('hai perso');
// }

// risultatose pari o dispari
var probabilità = sommaNumeri(somma)
console.log(probabilità);

//vittoria o perdita
if (sceltaMin == probabilità) {
  console.log('Hai vinto');
}else {
  console.log('Hai perso');
}

//funzione che determina se pari o dispari
function sommaNumeri(sommaDeiNumeri) {
  var risultato = 'dispari';

  if (somma % 2 == 0 ) {
    risultato = 'pari'
    return risultato;
  }
  return risultato;
}
