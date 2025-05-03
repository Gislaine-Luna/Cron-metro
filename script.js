let milissegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

function atualizarDisplay() {
  const formatado = 
    (horas < 10 ? "0" : "") + horas + ":" +
    (minutos < 10 ? "0" : "") + minutos + ":" +
    (segundos < 10 ? "0" : "") + segundos + "." +
    (milissegundos / 100); 
  
  document.getElementById("cronometro").innerText = formatado;
}

function iniciar() {
  intervalo = setInterval(() => {
    milissegundos += 100;
    if (milissegundos === 1000) {
      milissegundos = 0;
      segundos++;
    }
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
    atualizarDisplay();
  }, 100);
}

function pausar() {
  clearInterval(intervalo);
}

function resetar() {
  clearInterval(intervalo);
  milissegundos = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;
  atualizarDisplay();
}