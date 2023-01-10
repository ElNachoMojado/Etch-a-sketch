const grid = document.getElementById('grid');

const squaresRow = prompt("How many squares per row would you like? c:");

function totalSquares () {
    const dimension = squaresRow * squaresRow;
    return dimension;
}

//Calculates the size in pixels for the grid box so it 
//accurately places the squares according to user desired
//grid dimensions 
function gridWidth () {
    const pixelWidth = (squaresRow*25)+(2*squaresRow);
    document.getElementById('grid').style.width = pixelWidth+"px";
}

gridWidth();

//Places the number of squares stated by the user
for (i = 1; i <= totalSquares(); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
}