
let buttons = document.querySelectorAll(".button") // defines color buttons in array
let sequenceLevel = [] // computer generated level 1 sequence
let userResponseLevel = [] // defines level 1 user response
let playButton = document.querySelector(".buttonPlay")
// event listener and handler for play button
playButton.addEventListener('click', function(){showIndicatorsInSequence(sequenceLevel)})
// event listeners and handlers for color buttons
for(i = 0;1<4;i++){
buttons[i].addEventListener('click', function() { receiveUserColorButtonPress(buttons[i]) })
}
for (let i = 0; i <= 3; i++) {
    sequenceLevel.push(buttons[Math.floor(Math.random() * buttons.length)])
}   

setButtonOpacityFull = colorButton => colorButton.style.opacity = 1
setButtonOpacityHalf = colorButton => colorButton.style.opacity = 0.5
receiveUserColorButtonPress = colorButton =>{
    setButtonOpacityHalf(colorButton);
    setTimeout(
        function() {
            setButtonOpacityFull(colorButton)
        }, 400
    )
    userResponseLevel.push(colorButton);     // store click order by pushing colorButton to array
    if (userResponseLevel.length === sequenceLevel.length) {
        checkForMatch()
    }
}
function checkForMatch() {
   for (i in sequenceLevel) {
       let stringSeqLevel = []
       stringSeqLevel.push(sequenceLevel[i].classList[1])
       joinedSeqLevel = stringSeqLevel.join()
   }
   for (i in userResponseLevel) {
       let stringUserRespLevel = []
       stringUserRespLevel.push(userResponseLevel[i].classList[1])
       joinedUserRespLevel = stringUserRespLevel.join()
   }
    if (joinedSeqLevel === joinedUserRespLevel) {
        alert('You win!')
    } else {
        alert('Try again!')
    }
}


flashColorButtonIndicator = colorButton => {
    setButtonOpacityHalf(colorButton);
    setTimeout(
        function() {
            setButtonOpacityFull(colorButton)
        }, 500
    )
}


showIndicatorsInSequence = levelArray=> {
    for (i in levelArray) {
        let delay = (1000 * i) + 500;
        setTimeout(() => {
            flashColorButtonIndicator(levelArray[i])
        }, delay)
    }
}