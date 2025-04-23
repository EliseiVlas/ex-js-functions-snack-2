// function stampaOgniSecondo (numero){
//   console.log(numero);
  
//   return function(){
//   setInterval(() => {
//     if(numero > 1){
//       numero--
//   console.log(numero);
//     }else{
//       clearInterval(numero);
//       console.log("Tempo scaduto!");
      
//     }
//   }, 1000);
//  };
// }
// stampaOgniSecondo(5)()

function stampaOgniSecondo(numero) {
  console.log(numero);

  return function() {
    const id = setInterval(() => {
      numero--;
      if (numero > 0) {
        console.log(numero);
      } else {
        clearInterval(id);
        console.log("Tempo scaduto!");
      }
    }, 1000);
  };
}

stampaOgniSecondo(5)()

