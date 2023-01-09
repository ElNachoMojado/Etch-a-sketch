const grid = document.getElementById('grid');

const gridSize = 4;

for (i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
}