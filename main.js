// function gameInit

// When the user clicks play the computer:
// -starts at level 1
// -selects three random buttons from red, blue, green, and yellow
// 		-for each button, illuminate it (CSS feature—opacity?)
// -gets the buttons to light-up on the console
// -on delay



// defines color buttons in array
let buttons = document.querySelectorAll(".button")


// defines level 1 sequence
let sequenceLevel1 = [buttons[0], buttons[2], buttons[3], buttons[2]]


// defines play button
let playButton = document.querySelector(".buttonPlay")



// click play
playButton.addEventListener('click', function () {
    console.log(sequenceLevel1)
})



// click color buttons
// buttons[0].addEventListener('click', function () {
//     console.log("red button selected")
// })
buttons[0].addEventListener('click', changeButtonBackgroundRed)

buttons[1].addEventListener('click', changeButtonBackgroundBlue)

buttons[2].addEventListener('click', changeButtonBackgroundYellow)

buttons[3].addEventListener('click', changeButtonBackgroundGreen)





// change color button colors
function changeButtonBackgroundRed () {
    buttons[0].style.opacity = .5;
    buttons[0].style.opacity = "";
}

function changeButtonBackgroundBlue () {
    buttons[1].style.opacity = .5;
}

function changeButtonBackgroundYellow () {
    buttons[2].style.opacity = .5;
}

function changeButtonBackgroundGreen () {
    buttons[3].style.opacity = .5;
}

// display sequence Level 1
function displaySequenceLevel1 () {
    for (let i = 0; i < sequenceLevel1.length; i++) {
        checkValues(sequenceLevel1[i]) 
    }
}

// checkes values in the sequence array
function checkValues (button) {
    // console.log(button)
    if (button.className === 'button red' ) {
        return changeButtonBackgroundRed ()
    }
    else if (button.className === 'button blue') {
        return changeButtonBackgroundBlue ()
    }
    else if (button.className === 'button yellow') {
        return changeButtonBackgroundYellow ()
    }
    else if (button.className === 'button green') {
        return changeButtonBackgroundGreen ()
    }
}

