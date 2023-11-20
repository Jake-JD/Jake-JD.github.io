const redButton = document.getElementById('btnRed');
const blueButton = document.getElementById('btnBlue');
const yellowButton = document.getElementById('btnYellow');
const greenButton = document.getElementById('btnGreen');
const restartButton = document.getElementById('btnRestart');
const scoreRep = document.getElementById('scoreReplace')

const rng_list = [redButton, blueButton, yellowButton, greenButton]

let score = 0

let colours_clicked = []

let flashed_list = []

let colour_selected = ""

let optionVal = "";


// FLASH THE BUTTON A DIFFERENT COLOUR
const flash = async (color) => {
    if (color === "red") {
        optionButtons(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        redButton.style.backgroundColor = 'purple'
        await new Promise(resolve => setTimeout(resolve, 1000));
        redButton.style.backgroundColor = colour_selected;
        optionButtons(false);
    } else if (color === "blue") {
        optionButtons(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        blueButton.style.backgroundColor = 'purple'
        await new Promise(resolve => setTimeout(resolve, 1000));
        blueButton.style.backgroundColor = colour_selected;
        optionButtons(false);
    } else if (color === "yellow") {
        optionButtons(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        yellowButton.style.backgroundColor = 'purple'
        await new Promise(resolve => setTimeout(resolve, 1000));
        yellowButton.style.backgroundColor = colour_selected;
        optionButtons(false);
    } else if (color === "green") {
        optionButtons(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        greenButton.style.backgroundColor = 'purple'
        await new Promise(resolve => setTimeout(resolve, 1000));
        greenButton.style.backgroundColor = colour_selected;
        optionButtons(false);
    }

}

function game_start() {
    let rng = Math.floor(Math.random()*4);
    entry_random = rng_list[rng];
    
    // CALL FLASH FUNCTION AND APPEND COLOURS
    if (entry_random === redButton) {
        
        colour_selected = "red";
        flash(colour_selected);
        flashed_list.push(colour_selected);
        console.log(flashed_list);
    } else if (entry_random === blueButton) {
        
        colour_selected = "blue";
        flash(colour_selected);
        flashed_list.push(colour_selected);
        console.log(flashed_list);
    }
    else if (entry_random === yellowButton) {
        
        colour_selected = "yellow";
        flash(colour_selected);
        flashed_list.push(colour_selected);
        console.log(flashed_list);
    }
    else if (entry_random === greenButton) {
        
        colour_selected = "green";
        flash(colour_selected);
        flashed_list.push(colour_selected);
        console.log(flashed_list);
    }
    if (colours_clicked.length === flashed_list.length) {
        console.log("Moving to check press")
        check_press();
    } else {
        console.log("Passing to individual check press")
        // console.log(`flashed colours: ${flashed_list}`);
        // console.log(`colours clicked: ${colours_clicked}`);
        individual_check_press()
    }
}

function optionButtons(option) {
    redButton.disabled = option;
    blueButton.disabled = option;
    yellowButton.disabled = option;
    greenButton.disabled = option;
    restartButton.disabled = option;

}




redButton.addEventListener("click", () => {
    colours_clicked.push("red");
    console.log(colours_clicked);
    console.log(`colours clicked: ${colours_clicked}`);

    if (colours_clicked.length === flashed_list.length) {
        console.log("Moving to check press")
        check_press();
    } else {
        console.log("Passing to individual check press")
        console.log(`flashed colours: ${flashed_list}`);
        console.log(`colours clicked: ${colours_clicked}`);
        individual_check_press()
    }
})
blueButton.addEventListener("click", () => {
    colours_clicked.push("blue");
    console.log(colours_clicked);
    console.log(`colours clicked: ${colours_clicked}`);
    

    if (colours_clicked.length === flashed_list.length) {
        console.log("Moving to check press")
        check_press();
    } else {
        console.log("Passing to individual check press")
        console.log(`flashed colours: ${flashed_list}`);
        console.log(`colours clicked: ${colours_clicked}`);
        individual_check_press()
    }
})
yellowButton.addEventListener("click", () => {
    colours_clicked.push("yellow");
    console.log(colours_clicked);
    console.log(`colours clicked: ${colours_clicked}`);
    

    if (colours_clicked.length === flashed_list.length) {
        console.log("Moving to check press")
        check_press();
    } else {
        console.log("Passing to individual check press")
        console.log(`flashed colours: ${flashed_list}`);
        console.log(`colours clicked: ${colours_clicked}`);
        individual_check_press()
    }
})
greenButton.addEventListener("click", () => {
    colours_clicked.push("green");
    console.log(colours_clicked);
    console.log(`colours clicked: ${colours_clicked}`);
    

    if (colours_clicked.length === flashed_list.length) {
        console.log("Moving to check press")
        check_press();
    } else {
        console.log("Passing to individual check press")
        console.log(`flashed colours: ${flashed_list}`);
        console.log(`colours clicked: ${colours_clicked}`);
        individual_check_press()
    }
})

restartButton.addEventListener("click", () => {

    score = 0;

    colours_clicked = []

    flashed_list = []

    colour_selected = "";

    scoreRep.innerText = "Score:";

    optionButtons(false);

    game_start()
})

function endOfGame() {
    scoreReplace.innerText = `Score: ${score}`;
}

function check_press() {
    console.log("inside check press")
    console.log(colours_clicked.toString() === flashed_list.toString())
    console.log()
    if ((colours_clicked.length === flashed_list.length) && (colours_clicked.toString() != flashed_list.toString())) {
        console.log(`flashed colours: ${flashed_list}`);
        console.log(`colours clicked: ${colours_clicked}`);
        console.log("YOU FAILED");
        endOfGame()
    } 

    while (colours_clicked.length <= flashed_list.length && colours_clicked.toString() === flashed_list.toString()) {
        console.log("Well Done");
        score++;
        console.log(`score: ${score}`);
        colours_clicked = []
        game_start()
    }
    
}

function individual_check_press() {
    for (let i = 0; i < colours_clicked.length; i++) {
        if (colours_clicked[i] === flashed_list[i]) {
            console.log(`CC[i]: ${colours_clicked[i]} | FL[i]: ${flashed_list[i]} | letter i is num ${[i]}`)
            console.log(`ICS- CC:${colours_clicked}, FL:${flashed_list}`)
            // break;
            // game_start()
        } else {
            console.log("failed individual check!!");
            console.log(`score: ${score}`)
            endOfGame()
        }
    }
}



game_start()