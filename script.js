/**
 * Etch-a-Sketch
 * 
 * Author: Alec Sosa
 * Date: 7/5/2022
 * 
 * Filename: script.js
 */

const container = document.querySelector('.grid-container');

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    };

    changeColor();
};

function changeColor() {
    const item = document.querySelectorAll('.grid-item');
    
    item.forEach(i => {
        i.addEventListener('mouseover', (e)=>{
            i.style.backgroundColor = 'black';
        });
        /*i.addEventListener('mousedown', (e)=>{
            i.style.backgroundColor = 'black'
        });*/
        
    });
}

function gridSize() {
    let size = prompt(`Please enter size of grid(Ex: 16 = 16x16)`);

    if (size < 100 && !null) {
        let squares = container.querySelectorAll('div'); //selects all cells created before
        squares.forEach((div) => div.remove());          //removes each cell created
        makeRows(size, size);                            //creates new user inputted grid
    }
    else {
        return alert('ERROR');
    }
}


makeRows(16, 16);
