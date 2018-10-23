// function gameInit

// When the user clicks play the computer:
// -starts at level 1
// -selects three random buttons from red, blue, green, and yellow
// 	-are the color buttons in an array? or are they selected by Querry Selector All?
// 	-if it were not random, how would I get the computer to select the buttons in sequence?
// 		-cycle through the buttons which are in an array
// 		-for each button, illuminate it (CSS feature—opacity?)
// -gets the buttons to light-up on the console
// -on delay

let buttons = document.querySelectorAll(".button")

console.log(buttons)

let sequenceLevel1 = [buttons[0], buttons[2], buttons[3], buttons[2]]

console.log(sequenceLevel1)

document.querySelector(.)