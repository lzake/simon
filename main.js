

// defines color buttons in array
let buttons = document.querySelectorAll(".button")

// computer generated level 1 sequence
let sequenceLevel1 = []
for (let i = 0; i <= 3; i++) {
    sequenceLevel1.push(buttons[Math.floor(Math.random() * buttons.length)])
}   
// console.log(sequenceLevel1)


// defines level 1 user response
let userResponseLevel1 = []

// defines play button
let playButton = document.querySelector(".buttonPlay")

// event listener and handler for play button
playButton.addEventListener('click', function(){showIndicatorsInSequence(sequenceLevel1)})


// event listeners and handlers for color buttons
buttons[0].addEventListener('click', function() { handleUserColorButtonPress(buttons[0]) })

buttons[1].addEventListener('click', function() { handleUserColorButtonPress(buttons[1]) })

buttons[2].addEventListener('click', function() { handleUserColorButtonPress(buttons[2]) })

buttons[3].addEventListener('click', function() { handleUserColorButtonPress(buttons[3]) })


function setButtonOpacityFull(colorButton) {
    colorButton.style.opacity = 1;
}

function setButtonOpacityHalf(colorButton) {
    colorButton.style.opacity = 0.5;
}

function handleUserColorButtonPress(colorButton) {
    setButtonOpacityHalf(colorButton);
    setTimeout(
        function() {
            setButtonOpacityFull(colorButton)
        }, 200
    )

    // store click order by pushing colorButton to array
    userResponseLevel1.push(colorButton);
    if (userResponseLevel1.length === sequenceLevel1.length) {
        checkForMatch()
    }
    
}


function checkForMatch() {
    // computer defined
   for (let i = 0; i < sequenceLevel1.length; i++) {
       let stringSeqLevel1 = []
       stringSeqLevel1.push(sequenceLevel1[i].classList[1])
       joinedSeqLevel1 = stringSeqLevel1.join()
   }
//    user input
   for (let i = 0; i < userResponseLevel1.length; i++) {
       let stringUserRespLevel1 = []
       stringUserRespLevel1.push(userResponseLevel1[i].classList[1])
       joinedUserRespLevel1 = stringUserRespLevel1.join()
   }

    if (joinedSeqLevel1 === joinedUserRespLevel1) {
        alert('You win!')
    } else {
        alert('Try again!')
    }
}


function flashColorButtonIndicator(colorButton) {
    setButtonOpacityHalf(colorButton);
    setTimeout(
        function() {
            setButtonOpacityFull(colorButton)
        }, 500
    )
}


function showIndicatorsInSequence(levelArray) {
    for (let i = 0; i < levelArray.length; i++) {
        let delay = (1000 * i) + 500;
        setTimeout( function() {
            flashColorButtonIndicator(levelArray[i])
        }, delay)
    }
}