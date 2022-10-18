const container = document.getElementById("container");
let cells = document.getElementsByClassName("cell");
let rows = document.getElementsByClassName("gridRow");


let rowsAmount = 16
let columnsAmount = 16
defaultGrid(rowsAmount, columnsAmount)

//creates a default grid size, values can be changed later by user with slider e.g.
function defaultGrid (rowsAmount, columnsAmount) {
    makeRows(rowsAmount);
    makeColumns(columnsAmount);
}

//takes (rows, columns) input and makes a grid
    //creates rows

function makeRows (rowsAmount) {
    for ( r = 0; r<rowsAmount; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}

    //creates columns
function makeColumns (columnsAmount) {
    for (let i = 0; i < rows.length; i++){
        for (let j = 0; j < columnsAmount; j++){
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};



//flexbox the resulting divs in CSS (classes)
//borders&margins using em/rem? 


//individual div in grid changes (bg) color when a mouse hover enters 
/* cells.addEventListener('hov') */

/* mouseenter
mouseleave  */