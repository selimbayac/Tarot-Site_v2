document.addEventListener("DOMContentLoaded", function () {
    // Shuffle Button Functionality
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function shuffleCards() {
        const cardGrid = document.getElementById('cardGrid');
        const cardItems = Array.from(cardGrid.querySelectorAll('.grid-item'));
        const shuffledItems = shuffleArray(cardItems);
        shuffledItems.forEach(item => cardGrid.appendChild(item));
    }

    function setupSelection() {
        document.querySelectorAll('.grid-item label').forEach(label => {
            label.onclick = function (e) {
                const gridItem = this.parentElement;
                gridItem.classList.toggle('selected');

                const checkbox = gridItem.querySelector('input[type="checkbox"]');
                if (checkbox) checkbox.checked = gridItem.classList.contains('selected');

                e.preventDefault(); // Varsayýlan davranýþý engelle
            };
        });
    }

    document.getElementById('shuffleButton').onclick = shuffleCards;

    shuffleCards(); // Kartlarý karýþtýr
    setupSelection(); // Seçim iþlevi
});
