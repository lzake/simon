
// defines color buttons in array
let buttons = document.querySelectorAll(".button")

// defines level 1 sequence
let sequenceLevel1 = [buttons[0], buttons[2], buttons[3], buttons[2]]

// defines level 1 user response
let userResponseLevel1 = []

// defines play button
let playButton = document.querySelector(".buttonPlay")

// click handler for play button
playButton.addEventListener('click', function(){showIndicatorsInSequence(sequenceLevel1)})


// click handlers for color buttons
buttons[0].addEventListener('click', function() { handleColorButtonPress(buttons[0]) })

buttons[1].addEventListener('click', function() { handleColorButtonPress(buttons[1]) })

buttons[2].addEventListener('click', function() { handleColorButtonPress(buttons[2]) })

buttons[3].addEventListener('click', function() { handleColorButtonPress(buttons[3]) })


function setButtonOpacityFull(colorButton) {
    colorButton.style.opacity = 1;
}

function setButtonOpacityHalf(colorButton) {
    colorButton.style.opacity = 0.5;
}

function handleColorButtonPress(colorButton) {
    setButtonOpacityHalf(colorButton);
    setTimeout(
        function() {
            setButtonOpacityFull(colorButton)
        }, 200
    )

    // store click order by pushing colorButton to array
    userResponseLevel1.push(colorButton);
    checkForMatch()
}


function checkForMatch() {
    // todo checkForMatch not working find a way to evaluate a match
    if (sequenceLevel1 === userResponseLevel1) {
        alert('You win!')
    } else {
        console.log(sequenceLevel1, userResponseLevel1)
    }
}



function showColorButtonIndicator(colorButton) {
    setButtonOpacityHalf(colorButton);
    setTimeout(
        function() {
            setButtonOpacityFull(colorButton)
        }, 500
    )
}



function showIndicatorsInSequence(levelArray) {
    for (let i = 0; i < levelArray.length; i++) {
        let delay = (500 * i) + 500;
        setTimeout( function() {
            showColorButtonIndicator(levelArray[i])
        }, delay)
    }
}



// checks values in the sequence array
// function showSequence(button) {
//     console.log(button)
//     if (button.className === 'button red' ) {
//         console.log('red')
//         changeButtonBackgroundRed()
//     }
//     else if (button.className === 'button blue') {
//         console.log('blue')
//         changeButtonBackgroundBlue()
//     }
//     else if (button.className === 'button yellow') {
//         console.log('yellow')
//         changeButtonBackgroundYellow()
//     }
//     else if (button.className === 'button green') {
//         console.log('green')
//         changeButtonBackgroundGreen()
//     }
// }
