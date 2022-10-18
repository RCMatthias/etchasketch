const container = document.getElementById("container");
const userInput = document.getElementById("quantity");


//creates a default grid size, values can be changed later by user with slider e.g.
createGrid();

function createGrid () {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add('square');
        container.appendChild(div);
    }
};

function updateGrid () {
    //clear innerhtml from default grid container so we don't continuously stack new squares on old ones.
    container.innerHTML = "";
    //user input changes columns & rows 
    container.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`
    );
    container.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 2fr)`
    );


    //build and append as many squares as needed to fill columns & rows


const square = document.querySelector("div");
square.addEventListener("mouseover", function(event){
    event.target.classList.replace("square", "color")
});


//flexbox the resulting divs in CSS (classes)
//borders&margins using em/rem? 


//individual div in grid changes (bg) color when a mouse hover enters 
/* cells.addEventListener('hov') */

/* mouseenter
mouseleave  */