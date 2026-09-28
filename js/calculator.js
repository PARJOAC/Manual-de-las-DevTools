// Importar la funcion del botón del pánico
import { buttonActivated } from "./panic.js";

// Obtenemos los elementos del DOM donde se muestra el resultado y el contenedor de botones
const result = document.getElementById("result");
const buttons = document.getElementById("buttons");

// Escuchamos los clics dentro del contenedor de botones
buttons.addEventListener("click", (e) => {
  // Si se presiona el botón "CE", limpiamos la pantalla
  if (e.target.textContent === "CE") {
    console.warn("Limpiando calculadora...");
    result.textContent = "";
  }
  // Si se presiona el botón "=", calculamos el resultado
  else if (e.target.textContent === "=") {
    // Reemplazamos la "x" por "*" para que JavaScript pueda hacer la multiplicación
    let texto = result.textContent.replace("x", "*") || result.textContent;
    let resultado = eval(texto);

    if (resultado === 5) {
      buttonActivated("ERROR");
      alert("ERROR INTERNO");
      result.textContent = result;
    }
    // Si el resultado es válido, lo mostramos; si no, mostramos "Error"
    if (resultado != NaN) result.textContent = resultado;
    else result.textContent = "Error";
  }
  // Para cualquier otro botón, añadimos su texto a la pantalla
  else {
    result.textContent += e.target.textContent;
  }

  // Centramos el texto en el elemento de resultado
  result.style.textAlign = "center";
});
