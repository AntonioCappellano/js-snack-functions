/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.

function greet(name) {
  return `ciao ${name}`;
}

// Arrow Functions

const greets = (name) => `ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console

greet("Mario");
console.log(greet(userName));
greets("Mario");
console.log(greets(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
