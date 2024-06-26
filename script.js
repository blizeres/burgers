
function changeColor(event) {
    event.target.style.color = 'white';
}


function resetColor(event) {
    event.target.style.color = 'black';
}


const hoverTextElement = document.getElementById('displayText');
hoverTextElement.addEventListener('mouseover', changeColor);
hoverTextElement.addEventListener('mouseout', resetColor);


document.getElementById('searchButton').addEventListener('click', function() {
    let userInput = document.getElementById('searchInput').value;
    document.getElementById('displayText').innerText = userInput;
});
