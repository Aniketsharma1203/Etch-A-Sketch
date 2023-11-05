const container = document.querySelector('.container');
let gridSize = 20;

createGrid(gridSize);

function createGrid(size) {
    container.innerHTML = '';
    container.style.setProperty('width', `${size * 27}px`);

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);

        gridItem.addEventListener('mouseover', function () {
            gridItem.style.backgroundColor = 'black';
        });
    }
}

function createNewGrid() {
    const newSize = document.getElementById('gridSizeInput').value;

    if (newSize > 0 && newSize <= 100) {
        gridSize = newSize;
        createGrid(gridSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}