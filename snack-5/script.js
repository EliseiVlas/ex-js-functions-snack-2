function stampaOgniSecondo (messaggio){
    return function(){
    setInterval(() => {
      console.log(messaggio);
      
    }, 1000);
   };
  }
  stampaOgniSecondo("ciao!")()
  