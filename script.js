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
        //cell.innerText = c + 1;
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
        return makeRows(size, size);
    }
    else {
        return alert('ERROR');
    }
}


makeRows(16, 16);
