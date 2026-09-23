const florDOM = document.querySelector(".centro");
const tallosDOM = document.querySelectorAll(".tallo");
const petalosDOM = document.querySelectorAll(".petalos");
const botonDOM = document.querySelector("#btn-crecer");
const popDOM = document.querySelector("#popup-mensaje");
const reiniciar = document.querySelector("#cerrar-popup");
let pasos = 0;
function eliminar() {
  florDOM.classList.add("oculto");

  tallosDOM.forEach((element) => {
    element.classList.add("oculto");
  });

  petalosDOM.forEach((element) => {
    element.classList.add("oculto");
  });

  popDOM.classList.add("oculto");
}

function lanzarConfeti() {
  confetti({
    particleCount: 100, // Cantidad de papelitos
    spread: 80, // Ángulo de dispersión
    origin: { y: 0.6 }, // Punto de origen (0 es arriba, 1 es abajo)
    colors: ["#FFC107", "#4CAF50", "#FF5722"], // Puedes personalizar los colores
  });
}

botonDOM.addEventListener("click", () => {
  pasos++;

  if (pasos <= 3) {
    tallosDOM[pasos - 1].classList.remove("oculto");
  } else if (pasos === 4) {
    florDOM.classList.remove("oculto");
  } else {
    petalosDOM.forEach((e) => e.classList.remove("oculto"));
  }

  setTimeout(() => {
    if (pasos >= 5) {
      lanzarConfeti();
      popDOM.classList.remove("oculto");
    }
  }, 1500);
});

reiniciar.addEventListener("click", () => {
  eliminar();
  pasos = 0;
});

eliminar();
