function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function obterMensagemSensacao(temp, escala) {
    let mensagem = "";
  
    if (escala === "fahrenheit") {
      // A temperatura foi inserida em °C e convertida para °F
      if (temp >= 35) {
        mensagem = " 🔥 Está muito quente!";
      } else if (temp >= 20) {
        mensagem = " 😊 Clima agradável.";
      } else if (temp >= 10) {
        mensagem = " 🧥 Está um pouco frio.";
      } else {
        mensagem = " ❄️ Está muito frio!";
      }
    } else {
      // A temperatura foi inserida em °F e convertida para °C
      if (temp >= 95) {
        mensagem = " 🔥 Está muito quente!";
      } else if (temp >= 68) {
        mensagem = " 😊 Clima agradável.";
      } else if (temp >= 50) {
        mensagem = " 🧥 Está um pouco frio.";
      } else {
        mensagem = " ❄️ Está muito frio!";
      }
    }
  
    return mensagem;
  }
  
  function converterTemperatura() {
    const valor = parseFloat(document.getElementById("temperatura").value);
    const escala = document.getElementById("escala").value;
    const resultado = document.getElementById("resultado");
  
    if (isNaN(valor)) {
      resultado.textContent = "Por favor, insira um número válido.";
      return;
    }
  
    let convertido;
    let mensagem;
  
    if (escala === "fahrenheit") {
      convertido = celsiusParaFahrenheit(valor);
      mensagem = obterMensagemSensacao(valor, escala);
      resultado.textContent = `${valor}°C = ${convertido.toFixed(2)}°F\n${mensagem}`;
    } else {
      convertido = fahrenheitParaCelsius(valor);
      mensagem = obterMensagemSensacao(valor, escala);
      resultado.textContent = `${valor}°F = ${convertido.toFixed(2)}°C\n${mensagem}`;
    }
  }
  