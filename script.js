function toggleDarkMode() {
    document.body.classList.toggle("w3-dark-grey");
    document.body.classList.toggle("w3-light-grey");

    let containers = document.querySelectorAll(".w3-white, .w3-dark-grey");
    containers.forEach(container => {
        container.classList.toggle("w3-dark-grey");
        container.classList.toggle("w3-white");
        container.classList.toggle("w3-text-white", container.classList.contains("w3-dark-grey"));
    });

    let darkModeBtn = document.querySelector(".dark-mode-btn");
    if (document.body.classList.contains("w3-light-grey")) {
        darkModeBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("darkMode", "enabled");
    } else {
        darkModeBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("darkMode", "disabled");
    }
}
