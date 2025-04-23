function sequenzaOperazioni(operazioni, intervallo) {
  operazioni.forEach((operazione, indice) => {
    setTimeout(() => {
      operazione();
    }, indice * intervallo);
  });
}
sequenzaOperazioni([
  () => console.log("Operazione 1"),
  () => console.log("Operazione 2"),
  () => console.log("Operazione 3")
], 2000);