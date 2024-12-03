document.addEventListener('DOMContentLoaded', function () {
    const MAX_SELECTION = 7;
    const cardGrid = document.getElementById('cardGrid');
    const shuffleButton = document.getElementById('shuffleButton');
    const submitButton = document.getElementById('submitButton');

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function shuffleCards() {
        const cardItems = Array.from(cardGrid.querySelectorAll('.grid-item'));
        const shuffledItems = shuffleArray(cardItems);
        shuffledItems.forEach(item => cardGrid.appendChild(item));
        attachClickEvents(); // Shuffle sonrası tıklama olaylarını bağla
    }

    function attachClickEvents() {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            item.removeEventListener('click', handleCardClick); // Mevcut olayları temizle
            item.addEventListener('click', handleCardClick); // Tıklama olayını yeniden bağla
        });
    }

    function handleCardClick() {
        const checkbox = this.querySelector('input[type="checkbox"]');
        const isSelected = this.classList.contains('selected');
        const selectedItems = document.querySelectorAll('.grid-item.selected');

        if (isSelected) {
            this.classList.remove('selected');
            checkbox.checked = false;
        } else if (selectedItems.length < MAX_SELECTION) {
            this.classList.add('selected');
            checkbox.checked = true;
        } else {
            alert(`En fazla ${MAX_SELECTION} kart seçebilirsiniz!`);
        }

        toggleSubmitButton();
    }

    function toggleSubmitButton() {
        const selectedCount = document.querySelectorAll('.grid-item.selected').length;
        submitButton.disabled = selectedCount !== MAX_SELECTION;
    }

    shuffleButton.addEventListener('click', shuffleCards);
    shuffleCards(); // Sayfa açıldığında kartları karıştır
    attachClickEvents(); // İlk yüklemede tıklama olaylarını bağla
});
