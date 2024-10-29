const grid = document.querySelector('.grid');

const gridSize = 10;
const fill = 'black';

for (let i = 0; i < gridSize; i++){
    const divRow = document.createElement('div');
    divRow.setAttribute('style', `height:${grid.clientHeight/gridSize}px`);
    divRow.setAttribute('class', 'row');
    for (let i = 0; i < gridSize; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'tile');
        div.onmouseover = () => div.setAttribute("style", `background-color: ${fill}`);
        divRow.appendChild(div);
    }
    
    grid.appendChild(divRow);
    
}
