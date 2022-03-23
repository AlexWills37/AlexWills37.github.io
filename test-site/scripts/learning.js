// How does this work? DOM - Document Object Model
// Views the document as a tree of objects that can be edited - object oriented style
// DOM is a web-API

// document is the root
// every element is a Node of some sort

// stores the first <h1> element in myHeading
const myHeading = document.querySelector('h1');
// Sets content to hello world
myHeading.textContent = 'Hello world!';


// Declare a variable
// You do not need to define the value at this moment, but you can
let myVariable = "Bob";
myVariable = "Bob2";

// Single quotes
let stringVar = 'string';
let numberVar = 31;
let arrayVar = [1, 'Bob', 'Steven'];

// Returns true/false 
numberVar === 31;

// Get the HTML and add an event listener
let myHTML = document.querySelector('html');

//  on click, do this new function where we send an alert message
myHTML.addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
  }
);

// Anonymous function - function without a signature
// You can define the function with function() { /* logic */ }
// Or you can use () => { /* logic */ }
document.querySelector('html').addEventListener('click', () => {
    alert('Ouch! Stop poking me!');
  });