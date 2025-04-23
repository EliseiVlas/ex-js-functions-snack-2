function stampaOgniSecondo (messaggio, start, stop){
  return function(){
  const id = setInterval(() => {
    console.log(messaggio);
    
    
  }, start);
  setTimeout(() => {
    clearInterval(id);
    console.log("intervallo fermato");
    
  }, stop)
 };
}
stampaOgniSecondo("ciao!", 1000, 5000)()
