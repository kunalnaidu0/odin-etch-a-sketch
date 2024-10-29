const grid = document.querySelector('.grid');

// constant values
let fill = '#000000';

/**
 * Creates grid and deletes any previous grid that was present. Uses the div with the class 'grid''.
 * @param {Number} gridSize 
 */
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

// create new grid with new size
const changeSize = document.querySelector("#grid-size");
changeSize.onclick = function(){

    let newSize = prompt("Please enter a new grid size");
    // check to see if grid size given follows rules
    while (newSize <= 0 || newSize > 100 || newSize % 1 != 0){
        alert("Please enter a integer between 1 and 100");
        newSize = prompt("Please enter a new grid size");
    };
    createGrid(newSize);

};


// make clear button turn all tiles in grid to white
const clearGrid = document.querySelector("#clear");
clearGrid.onclick = function(){
    const tiles = document.querySelectorAll(".tile");
    for (const tile of tiles) tile.setAttribute("style", "background-color: white");
}

// make eraser button turn fill to white
const eraser = document.querySelector("#eraser");
eraser.onclick = () => fill = 'white';


// make color picker change fill to selected color
let colorPicker;
const defaultColor = fill;

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#color-picker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", update, false);
    colorPicker.select();
  }

  function update(event) {
      fill = event.target.value;
  };
  

  
