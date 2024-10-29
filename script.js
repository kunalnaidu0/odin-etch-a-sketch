const grid = document.querySelector('.grid');

// constant values
const fill = 'black';


function createGrid(gridSize = 10){
    // delete previous grid
    grid.replaceChildren();
    // create the grid
    for (let i = 0; i < gridSize; i++){
        const divRow = document.createElement('div');
        divRow.setAttribute('style', `height:${grid.clientHeight/gridSize}px`);
        divRow.setAttribute('class', 'row');
        for (let i = 0; i < gridSize; i++){
            const div = document.createElement('div');
            div.setAttribute('class', 'tile');
            // add hover effect
            div.onmouseover = () => div.setAttribute("style", `background-color: ${fill}`);
            divRow.appendChild(div);
        }
        
        grid.appendChild(divRow);
        

    };

}

createGrid();


const changeSize = document.querySelector("#grid-size");
changeSize.onclick = function(){

    let newSize = prompt("Please enter a new grid size");

    while (newSize <= 0 || newSize > 100 || newSize % 1 != 0){
        alert("Please enter a integer between 1 and 100");
        newSize = prompt("Please enter a new grid size");
    }
    createGrid(newSize);

};


