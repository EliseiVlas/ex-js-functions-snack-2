const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
const studente = students.find((student)=>{
  return student.name === 'Marco Lanci'
})
console.log(studente.class);

// Risultato: '3C'

// versione compata
 
const studente2 = students.find(student=>student.name === 'Marco Lanci')
console.log(studente2.class);

let classe
// versione FOR
 for(let i = 0; i < students.length; i++){
  if(students[i].name === 'Marco Lanci'){
    classe = students[i].class
  }
 }
 console.log(classe);
 