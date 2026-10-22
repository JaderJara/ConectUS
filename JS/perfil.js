// Animación de conteo para estadísticas
function animateValue(id, start, end, duration) {
    if (!document.getElementById(id)) return; // Evita errores si el elemento no existe
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let percentage = Math.min(progress / duration, 1);
        current = start + Math.floor(range * percentage);
        obj.innerHTML = current;
        if (percentage < 1) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

window.onload = function() {
    // Iniciar animaciones de conteo
    animateValue("books-read", 0, 12, 2000);
    animateValue("active-days", 0, 30, 2000);

    // Cambiar foto de perfil al hacer clic (simulación)
    const profilePic = document.getElementById("profile-pic");
    if (profilePic) {
        profilePic.addEventListener("click", function() {
            this.src = this.src.includes("avatar-default") ? "img/avatar-alternative.png" : "img/avatar-default.png";
            if (!this.src.includes("http")) this.onerror = () => this.src = "https://via.placeholder.com/100";
        });
    }

    // Simulación de edición
    const editBtn = document.querySelector(".edit-btn");
    if (editBtn) {
        editBtn.addEventListener("click", function() {
            alert("¡Edita tu aventura aquí! (Funcionalidad en desarrollo)");
        });
    }

    // Simulación de cerrar sesión
    const logoutBtn = document.querySelector(".logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function() {
            if (confirm("¿Seguro que quieres cerrar sesión?")) {
                window.location.href = "inicio.html";
            }
        });
    }
};