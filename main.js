const grid = document.getElementById('grid');

const createGridElem = (row, column, rowElem) => {
    const gridElem = document.createElement('div');
    gridElem.setAttribute('id', "grid-row-" + row + "-column-" + column);
    gridElem.classList.add('grid-elem');
    rowElem.appendChild(gridElem);
    console.log('Added Child');
}

const createGridRow = (row) => {
    const gridRow = document.createElement('div');
    gridRow.setAttribute('id', "grid-row-" + row);
    gridRow.classList.add('grid-row');
    grid.appendChild(gridRow)
    console.log('Added Row');
    return gridRow;
}

let columns = 4;
let rows = 4;

for (let i = 1; i <= rows; i++) {
    const row = createGridRow(i);
    for (let j = 1; j <= columns; j++) {
        createGridElem(i, j, row);
    }
}