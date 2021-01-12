let redButton = document.querySelector('.red'); 
let whiteButton = document.querySelector('.white'); 
let blueButton = document.querySelector('.blue'); 
let yellowButton = document.querySelector('.yellow'); 

redButton.addEventListener('click', changeBackgroundColorToRed);  //add event listener, call function
whiteButton.addEventListener('click', changeBackgroundColorToWhite);
blueButton.addEventListener('click', changeBackgroundColorToBlue);
yellowButton.addEventListener('click', changeBackgroundColorToYellow);

function changeBackgroundColorToBlue() {
    // No need to change the content of this function. Don't worry if this code is new to you.
    document.body.style.backgroundColor = 'blue'; // inline style line
  }
  
  function changeBackgroundColorToRed() {
    // No need to change the content of this function. Don't worry if this code is new to you.
    document.body.style.backgroundColor = 'red';
  }
  function changeBackgroundColorToWhite() {
    // No need to change the content of this function. Don't worry if this code is new to you.
    document.body.style.backgroundColor = 'white'; // inline style line
  }
  
  function changeBackgroundColorToYellow() {
    // No need to change the content of this function. Don't worry if this code is new to you.
    document.body.style.backgroundColor = 'yellow';
  }