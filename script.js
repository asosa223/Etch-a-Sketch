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
    let size = document.querySelector('.grid-size');
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    };

    size.textContent = `${rows} x ${cols}`;
    changeColor();
};

function changeColor() {
    const item = document.querySelectorAll('.grid-item');
    let black = document.querySelector('#black');
    let erase = document.querySelector('#erase');
    let color = document.querySelector('#color');
    let h2 = document.querySelector('h2');
    
    //click black button, activates black ink on sketch pad
    black.addEventListener('click', (e) => {
        h2.innerText = '';
        item.forEach(i => {
            i.addEventListener('mouseover', (e) => {
                i.style.backgroundColor = 'black';
            });
        });
    });

    //click erase button, activates white ink on sketch pad
    erase.addEventListener('click', (e) => {
        h2.innerText = '';
        item.forEach(i => {
            i.addEventListener('mouseover', (e) => {
                i.style.backgroundColor = 'white';
            });
        });
    });

    //click color button, activates random color ink on sketch pad
    color.addEventListener('click', (e) => {
        h2.innerText = '';
        item.forEach(i => {
            i.addEventListener('mouseover', (e) => {
                i.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            });
        });
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
