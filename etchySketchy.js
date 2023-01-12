//stores color value
function myColor () {
    const myColor = document.getElementById('myColor').value;
    return myColor;
}

//Adds squares to grid box
function addSquares () {
    size = (540/squaresRow)-2;
    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute("style", `height: ${size}px; width: ${size}px`);
    grid.appendChild(square);
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = `${color}`;
    });
}

//Removes squares from grid box
function removeSquares () {
    let square;
    const totalSquares = grid.getElementsByClassName('square').length;
    if (totalSquares === 0) {

    } else {
        for (i = 0; i < totalSquares; i++) {
            square = document.querySelector('.square');
            grid.removeChild(square);
        }
    }
}

const grid = document.getElementById('grid');
let squaresRow;
let size;
let color;

//Applies chosen color to paintbrush or erases
const coloring = document.getElementById('pickColor');
coloring.addEventListener('click', event => {
    if (event.target.nodeName == "BUTTON") {
        if (event.target.textContent == 'Eraser') {
            color = 'white';
        } else {
            color = myColor();
        }
    }
});

//Adds functionality to the many buttons
const option = document.getElementById('options');
option.addEventListener('click', event => {
    if (event.target.nodeName == "BUTTON") {
        removeSquares();
        if (event.target.textContent == '8x8') {
            for (i = 1; i <= 64; i++) {
                squaresRow = 8;
                addSquares();
            }
        } else if (event.target.textContent == '16x16') {
            for (i = 1; i <= 256; i++) {
                squaresRow = 16;
                addSquares();
            }
        } else if (event.target.textContent == '32x32') {
            for (i = 1; i <= 1024; i++) {
                squaresRow = 32;
                addSquares();
            }
        } else if (event.target.textContent == '64x64') {
            for (i = 1; i <= 4096; i++) {
                squaresRow = 64;
                addSquares();
            }
        } 

    }
});