// Array'i karýþtýrmak için fonksiyon
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Kartlarý karýþtýran fonksiyon
function shuffleCards() {
    const cardGrid = document.getElementById('cardGrid');
    const cardItems = Array.from(cardGrid.querySelectorAll('.grid-item'));
    const shuffledItems = shuffleArray(cardItems);
    shuffledItems.forEach(item => cardGrid.appendChild(item));
}

// Sayfa yüklendiðinde kartlarý karýþtýr
window.onload = shuffleCards;

// Kart seçimi yapýldýðýnda, ilgili checkbox'ý iþaretle ve kartý seçili yap
document.querySelectorAll('.grid-item').forEach(item => {
    item.onclick = function () {
        // Tüm kartlardan seçiliyi kaldýr
        document.querySelectorAll('.grid-item').forEach(el => el.classList.remove('selected'));
        // Bu kartý seçili yap
        this.classList.add('selected');
        // Ýlgili checkbox'ý iþaretle
        const radio = this.querySelector('input[type="radio"]');
        radio.checked = true;
    };
});

// Form gönderildiðinde AJAX ile kartý gösterme
document.getElementById('tarotForm').onsubmit = function (event) {
    event.preventDefault(); // Sayfa yenilenmesini engelle

    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', this.action);
    xhr.onload = function () {
        document.getElementById('cardResults').innerHTML = xhr.response; // Sonuçlarý yerleþtir
    };
    xhr.send(formData); // Formu gönder
};
