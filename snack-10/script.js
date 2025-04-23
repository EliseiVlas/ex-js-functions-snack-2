function creaThrottler(fn, limite) {
  let ultimoTempo = 0;

  return function(...args) {
    const ora = Date.now();
    if (ora - ultimoTempo >= limite) {
      ultimoTempo = ora;
      fn(...args);
    }
  };
}

const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ Eseguito subito
throttledLog(); // ❌ Ignorato se chiamato entro 2 secondi
setTimeout(throttledLog, 2000); // ✅ Eseguito dopo 2.5 secondi
setTimeout(throttledLog, 1000); // ✅ Eseguito dopo 2.5 secondi