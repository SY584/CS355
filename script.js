
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");

    function applyDarkMode(isDark) {
        document.body.classList.toggle("dark-mode", isDark);
        localStorage.setItem("darkMode", isDark);
    }

    const darkModeSetting = localStorage.getItem("darkMode") === "true";
    applyDarkMode(darkModeSetting);

    toggleButton.addEventListener("click", () => {
        applyDarkMode(!document.body.classList.contains("dark-mode"));
    });
});
