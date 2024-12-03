// Array'i kar��t�rmak i�in fonksiyon
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Kartlar� kar��t�ran fonksiyon
function shuffleCards() {
    const cardGrid = document.getElementById('cardGrid');
    const cardItems = Array.from(cardGrid.querySelectorAll('.grid-item'));
    const shuffledItems = shuffleArray(cardItems);
    shuffledItems.forEach(item => cardGrid.appendChild(item));
}

// Sayfa y�klendi�inde kartlar� kar��t�r
window.onload = shuffleCards;

// Kart se�imi yap�ld���nda, ilgili checkbox'� i�aretle ve kart� se�ili yap
document.querySelectorAll('.grid-item').forEach(item => {
    item.onclick = function () {
        // T�m kartlardan se�iliyi kald�r
        document.querySelectorAll('.grid-item').forEach(el => el.classList.remove('selected'));
        // Bu kart� se�ili yap
        this.classList.add('selected');
        // �lgili checkbox'� i�aretle
        const radio = this.querySelector('input[type="radio"]');
        radio.checked = true;
    };
});

// Form g�nderildi�inde AJAX ile kart� g�sterme
document.getElementById('tarotForm').onsubmit = function (event) {
    event.preventDefault(); // Sayfa yenilenmesini engelle

    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', this.action);
    xhr.onload = function () {
        document.getElementById('cardResults').innerHTML = xhr.response; // Sonu�lar� yerle�tir
    };
    xhr.send(formData); // Formu g�nder
};
