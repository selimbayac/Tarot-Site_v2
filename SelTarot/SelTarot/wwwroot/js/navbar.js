document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navbarMenu = document.getElementById("navbarMenu");

    // Hamburger men� butonuna t�klama
    menuToggle.addEventListener("click", function () {
        navbarMenu.classList.toggle("open");

        // Men� a��ld���nda body'nin overflow-x �zelli�ini kontrol et
        if (navbarMenu.classList.contains("open")) {
            document.body.style.overflow = "hidden"; // Men� a��ld���nda scrollu engelle
        } else {
            document.body.style.overflow = "auto"; // Men� kapand���nda scrollu a�
        }
    });

    // Men� d���nda bir yere t�klan�rsa men�y� kapatma
    document.addEventListener("click", function (event) {
        if (!navbarMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navbarMenu.classList.remove("open");
            document.body.style.overflow = "auto"; // Men� d���na t�klan�nca scrollu a�
        }
    });
});
