// Seleccionamos el botón del DOM mediante su ID
const boton = document.getElementById("cambiarTema");

// Cambia la imagen y muestra un mensaje cuando el ratón entra en el botón
boton.addEventListener("mouseenter", () => {
  boton.src = "images/claro.png";
  console.info("Se ha cambiado la imagen a oscuro.");
});

// Restaura la imagen y muestra un mensaje cuando el ratón sale del botón
boton.addEventListener("mouseleave", () => {
  boton.src = "images/oscuro.png";
  console.info("Se ha cambiado la imagen a claro.");
});

// Evento que se ejecuta al hacer clic en el botón
boton.addEventListener("click", (a) => {
  // Muestra en la consola las coordenadas exactas donde se hizo clic
  console.info(
    `Has hecho click en las coordenadas: X: ${a.pageX} Y: ${a.pageY}`,
  );

  // Alterna el tema actual entre "light" y "dark"
  const nuevoTema =
    document.documentElement.getAttribute("data-theme") === "light"
      ? "dark"
      : "light";

  // Actualiza la imagen del botón según el nuevo tema seleccionado
  nuevoTema === "dark"
    ? (boton.src = "images/claro.png")
    : (boton.src = "images/oscuro.png");

  // Aplica el nuevo tema en el atributo global del documento
  document.documentElement.setAttribute("data-theme", nuevoTema);
});
