document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navbarMenu = document.getElementById("navbarMenu");

    // Hamburger menü butonuna týklama
    menuToggle.addEventListener("click", function () {
        navbarMenu.classList.toggle("open");

        // Menü açýldýðýnda body'nin overflow-x özelliðini kontrol et
        if (navbarMenu.classList.contains("open")) {
            document.body.style.overflow = "hidden"; // Menü açýldýðýnda scrollu engelle
        } else {
            document.body.style.overflow = "auto"; // Menü kapandýðýnda scrollu aç
        }
    });

    // Menü dýþýnda bir yere týklanýrsa menüyü kapatma
    document.addEventListener("click", function (event) {
        if (!navbarMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navbarMenu.classList.remove("open");
            document.body.style.overflow = "auto"; // Menü dýþýna týklanýnca scrollu aç
        }
    });
});
