

document.getElementById("passwordForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    const passwordInput = document.getElementById("number").value;
    const message = document.getElementById("message");
  
    if (passwordInput === "2025") {
      // Mostrar mensaje con animación
      message.classList.remove("hidden");
      message.classList.add("visible");
      message.textContent = "FABIAN ES GAY.";

      setTimeout(() => {
        message.classList.remove("visible");
        message.classList.add("hidden");
      }, 10000);

    } else {
      // Mostrar mensaje de error con animación
      message.classList.remove("visible");
      message.classList.add("hidden");
      const errorMessage = document.createElement("div");
      errorMessage.classList.add("error-message", "animated");
      errorMessage.textContent = "Contraseña incorrecta. Intenta de nuevo.";
      const form = document.getElementById("passwordForm");
      form.appendChild(errorMessage);
      setTimeout(() => {
        errorMessage.classList.add("fade-out");
        setTimeout(() => {
          form.removeChild(errorMessage);
        }, 5000);
      }, 8000);
    }
}); 