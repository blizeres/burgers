// Функция для изменения цвета текста
function changeColor(event) {
    event.target.style.color = 'white';
}

// Функция для возврата цвета текста к исходному
function resetColor(event) {
    event.target.style.color = 'black';
}

// Добавляем обработчики событий для элемента с id "hoverText"
const hoverTextElement = document.getElementById('displayText');
hoverTextElement.addEventListener('mouseover', changeColor);
hoverTextElement.addEventListener('mouseout', resetColor);

// Обработчик события для кнопки поиска
document.getElementById('searchButton').addEventListener('click', function() {
    let userInput = document.getElementById('searchInput').value;
    document.getElementById('displayText').innerText = userInput;
});
