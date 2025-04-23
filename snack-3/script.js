const somma = (a,b) => a +b;
const dividi = (a,b) => a / b;

const eseguiOpe = (a,b,operazione) => operazione(a,b);

console.log(eseguiOpe(10, 5, somma));

console.log(eseguiOpe(10, 5, dividi));

