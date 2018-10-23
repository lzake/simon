// function gameInit

// When the user clicks play the computer:
// -starts at level 1
// -selects three random buttons from red, blue, green, and yellow
// 		-for each button, illuminate it (CSS feature—opacity?)
// -gets the buttons to light-up on the console
// -on delay

let buttons = document.querySelectorAll(".button")

console.log(buttons)

let sequenceLevel1 = [buttons[0], buttons[2], buttons[3], buttons[2]]

console.log(sequenceLevel1)

let playButton = document.querySelector(".buttonPlay")

console.log(playButton)

// click play
playButton.addEventListener('click', function () {
    console.log(sequenceLevel1)
})

// color buttons
let selectRed = document.querySelector(".red")
let selectBlue = document.querySelector(".blue")
let selectYellow = document.querySelector(".yellow")
let selectGreen = document.querySelector(".green")

// click color buttons
selectRed.addEventListener('click', function () {
    console.log("red button selected")
})

selectBlue.addEventListener('click', function () {
    console.log("blue button selected")
})

selectYellow.addEventListener('click', function () {
    console.log("yellow button selected")
})

selectGreen.addEventListener('click', function () {
    console.log("green button selected")
})
