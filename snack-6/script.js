function creaContatoreAutomatico (intervallo){
  let contatore = 0
  return function(){
  setInterval(() => {
      contatore++
    console.log(contatore);
    
  }, intervallo);
 };
}
creaContatoreAutomatico(1000)()
