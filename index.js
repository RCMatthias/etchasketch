const container = document.querySelector(".container");
const userInput = document.getElementById("quantity") ;
const resetButton = document.querySelector(".reset");
const rainbowBtn = document.querySelector(".rainbow");
const colourSelected = document.querySelector(".colorPick")
console.log(colourSelected.value)

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



//change color to red on hover
const square = document.querySelector("div.container");
square.addEventListener("mouseover", function(e){
    e.target.classList.replace("square", "colored");
});

colourSelected.addEventListener("click", function(e){
    const square = document.querySelector("div.container");
    square.addEventListener("mouseover", function(e){
          e.target.style.backgroundColor = colourSelected.value;
      });
});

//Rainbow draw (random color per square) functionality
rainbowBtn.addEventListener("click", function(e){
    const square = document.querySelector("div.container");
    square.addEventListener("mouseover", function(e){
        const randomColor = setRandomColor();
          e.target.style.backgroundColor = randomColor;
      });
});
 

//reset button to basic 16x16 grid
resetButton.addEventListener("click", function(){
    container.innerHTML="";
    userInput.value="";
    container.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    container.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid();
}) ;



//button to choose for randomcolor
const setRandomColor  = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor ;
}





createGrid();