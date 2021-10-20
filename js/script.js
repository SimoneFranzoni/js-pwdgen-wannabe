const firstname = prompt("Inserisci il nome");
const lastname = prompt("Inserisci il cognome");
const favouritecolor = prompt("Inserisci il tuo colore preferito");
const number = 21;

const password = firstname + lastname + favouritecolor +number;

console.log(firstname);
console.log(lastname);
console.log(favouritecolor);
console.log(password);

const textToPrint = `La tua password è: ${password}`;

console.log(textToPrint);

document.getElementById('password').innerHTML = textToPrint;