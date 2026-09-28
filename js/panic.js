// Importar la funcion de cambio de tema
import { changeTheme } from './theme.js';

// Seleccionamos el botón de pánico del DOM
const botonPanico = document.getElementById("panico");

// Evento para cuando se hace click en el boton de panico
botonPanico.addEventListener("click", buttonActivated());

export function buttonActivated(text) {
  if (text === "DEFAULT") {
    let countDown = 3; // Contador con los segundos restantes

    // Intervalo que se ejecuta cada 1 segundo al hacer click en la imagen
    const interval = setInterval(() => {
      // Mostramos un mensaje de error en la consola con la cuenta atrás
      console.error(
        `ALERTA: Quedan ${countDown} segundos para autodestrucción.`,
      );
      countDown--; // Reducimos el contador

      // Cuando el contador llega a menos de 0, detenemos el intervalo y redirigimos
      if (countDown < 0) {
        clearInterval(interval); // Detener la ejecución del intervalo
        // Redirigir a un enlace
        window.location.href =
          "https://www.youtube.com/watch?v=DLzxrzFCyOs&list=RDDLzxrzFCyOs&start_radio=1";
      }
    }, 1000);
  } else if (text === "ERROR") {
    changeTheme();
    throw new Error("Ha ocurrido un error en el botón del pánico.");
  }
}
