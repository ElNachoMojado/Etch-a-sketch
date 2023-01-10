const grid = document.getElementById('grid');

const squaresRow = prompt("How many squares per row would you like? c:");
const size = (540/squaresRow)-2;
console.log(size);

function totalSquares () {
    const dimension = squaresRow * squaresRow;
    return dimension;
}

/* Calculates the size of the square so the number of
squares per row match the quantity given by the user 
without changing the total size of the grid box. */
for (i = 1; i <= totalSquares(); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute("style", `height: ${size}px; width: ${size}px`)
    grid.appendChild(square);
}