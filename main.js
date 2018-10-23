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
buttons[0].addEventListener('click', function () {
    console.log("red button selected")
})

buttons[1].addEventListener('click', function () {
    console.log("blue button selected")
})

buttons[2].addEventListener('click', function () {
    console.log("yellow button selected")
})

buttons[3].addEventListener('click', function () {
    console.log("green button selected")
})

// change color button colors
// function changeButtonBackgroundRed () {
//     selectRed.style.backgroundColor = 'magenta';
// }








// function changeBackgroundColorToBlue () {
//     // No need to change the content of this function. Don't worry if this code is new to you.
//     document.body.style.backgroundColor = 'blue';
//   }
  
//   function changeBackgroundColorToRed () {
//     // No need to change the content of this function. Don't worry if this code is new to you.
//     document.body.style.backgroundColor = 'red';
//   }
  
//   const buttonRed = document.querySelector('.red')
//   buttonRed.addEventListener('click', changeBackgroundColorToRed)
  
//   const buttonBlue = document.querySelector('.blue')
//   buttonBlue.addEventListener('click', changeBackgroundColorToBlue)