const container = document.querySelector(".container");
const userInput = document.getElementById("quantity") ;
const resetButton = document.querySelector(".reset");

//creates a default grid size, values can be changed later by user with slider e.g.
function createGrid () {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add('square');
        container.appendChild(div);
    };
};
userInput.addEventListener("change", updateGrid);

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
    for (let i =0; i<(userInput.value * userInput.value);i++){
            const div = document.createElement("div");
            div.classList.add("square");
            container.appendChild(div);
        }
};



//change color on hover
const square = document.querySelector("div");
square.addEventListener("mouseover", function(e){
    e.target.classList.replace("square", "colored")
});


//reset button to basic 16x16 grid
resetButton.addEventListener("click", function(){
    container.innerHTML="";
    userInput.value="";
    container.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    container.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid();
}) ;

createGrid();

//color select button (change color of "color" class)