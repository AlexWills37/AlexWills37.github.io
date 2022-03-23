let myImage = document.querySelector('img');


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


// This is a global event listener that I guess every component has.
// On click, toggle the image
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/energyman.png') {
      myImage.setAttribute('src','images/crystal.png');
    } else {
      myImage.setAttribute('src','images/energyman.png');
    }
}


function setUserName() {
    let myName = prompt('Please enter your name.');

    // null returns false, everything else is true i think
    if(!myName) {
        setUserName();
    } else {
        // localStorage is an API thing stored in the browser!
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }
  

// Allow the user to set their name for the first time, and update the heading with a custom message!
if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

// Allow the user to change their name!
myButton.onclick = function() {
    setUserName();
  }
  
  