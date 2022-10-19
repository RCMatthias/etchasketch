const container = document.querySelector(".container");
const userInput = document.getElementById("quantity") ;
const resetButton = document.querySelector(".reset");
const rainbowBtn = document.querySelector(".rainbow");


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
    if (userInput.value > 100){
        userInput.value = 100;
    }
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
const square = document.querySelector("div.container");
square.addEventListener("mouseover", function(e){
/*     e.target.classList.replace("square", "colored");
 */    const randomColor = setRandomColor();
    e.target.style.backgroundColor = randomColor
    /* 
    e.target.classList.add("rainbow");
    const randomColor = setRandomColor;
    e.target.setAttribute('style', "background-color: randomColor");
    e.target.classList.replace("square", "rainbow"); */

});



//reset button to basic 16x16 grid
resetButton.addEventListener("click", function(){
    container.innerHTML="";
    userInput.value="";
    container.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    container.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid();
}) ;


//color select button (change color of "color" class)

/* a loop in which each time we get a random Number
the random number selects a color (array with colors to numbers?)
 */

//button to choose for randomcolor
const setRandomColor  = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor ;
}

console.log(setRandomColor())
/* rainbowBtn.addEventListener("click", setRandomColor);
 */
/* classList.replace("colored", )
classList.add("rainbow")
rainbow.setAttribute("")
classList.replace("colored, rainbow")

 */

createGrid();