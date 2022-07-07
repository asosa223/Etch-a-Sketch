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
};

function changeColor() {
    const item = document.querySelectorAll('.grid-item');
    
    item.forEach(i => {
        i.addEventListener('mouseover', (e)=>{
            i.style.backgroundColor = 'black';
        });
        
    });
}

function gridSizeRow() {
    let row = prompt(`Please enter number of rows`);

    if (row < 100 && !null) {
        return console.log(row);
    }
    else {
        return console.log('ERROR');
    }
}

function gridSizeCol() {
    let col = prompt(`Please enter number of columns`);

    if (col < 100 && !null) {
        return console.log(col);
    }
    else {
        return console.log('ERROR');
    }
}

makeRows(16, 16);
changeColor();