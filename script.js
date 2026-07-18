const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "¡Este cambio ya está corriendo en tu navegador! Ahora súbelo a GitHub 🚀";
});
