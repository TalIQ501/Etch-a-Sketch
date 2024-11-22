const outputElem = document.getElementById('grid-container');

const createGridElem = (row, column, rowElem) => {
    //Create Box in Grid
    const gridElem = document.createElement('div');

    //Give each box an ID and the general class
    gridElem.setAttribute('id', "grid-row-" + row + "-column-" + column);
    gridElem.classList.add('grid-elem');

    //Add Box to Row
    rowElem.appendChild(gridElem);
}

const createGridRow = (row) => {
    const gridRow = document.createElement('div');
    gridRow.setAttribute('id', "grid-row-" + row);
    gridRow.classList.add('grid-row');
    grid.appendChild(gridRow);

    //Return the element for use in functions
    return gridRow;
}

const createGrid = (output, gridSize) => {
    const newGrid = document.createElement('div');
    newGrid.setAttribute("id", "grid");
    newGrid.classList.add('grid');
    output.appendChild(newGrid);
    for (let i = 1; i <= gridSize; i++) {
        const row = createGridRow(i);
        for (let j = 1; j <= gridSize; j++) {
            createGridElem(i, j, row);
        }
    }
}

createGrid(outputElem, 16);

const handleBtnClick = (text) => {
    // Prompt for input and convert to a number
    let gridSize = Number(prompt(text + 'Enter size of grid: '));

    // Validate the input
    if (isNaN(gridSize) || !Number.isInteger(gridSize) || gridSize > 100 || gridSize <= 0) {
        handleBtnClick('Incorrect value. ');
    } else {
        const grid = document.getElementById('grid');
        if (grid) {
            grid.remove();
        }
        createGrid(outputElem, gridSize);
    }
};

const handleGridClick = (rows, columns) => {
    document.getElementById('grid');
    createGrid(outputElem, rows, columns);
}

