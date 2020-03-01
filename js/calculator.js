// In this assignment you will practice working with Events, Functions, and more to create a better version of the calculator that we built in a previous class. To complete this part, follow the steps outlined below:
// 1.    Notice the markup that I’ve included for you in the web page. 
// There is a text box that will display the value of each button click and 16 different buttons each of which represents a major key on a basic calculator. 
// Begin by adding an event listener to the window object that listens for the load event and when heard, calls a user-defined function called init().
// 2.    Create the user-defined function called init(). This is the function where you will handle all of the event listeners for every button in calculator button.
//  3.    Create an anonymous helper function that gets an element from the DOM and returns that element as an object stored in “$”.
//  4.    Within the init() function, attach an event listener to each of the 16 buttons in the web page. You will listen for the click event and when heard, a function called enter() should be called for each of the buttons except for the equal sign. TIP: Since you are attaching an event listener to an object (each button in the calculator), you will need to pass the value of the selected object into the enter() function. You can do this using the syntax $(“one”).value for instance.
//  5.    For the equal button, call a function called calculate(). You will not pass any arguments into this function.
//  6.    Create a user-defined function called enter() that accepts val as an argument.
//  7.    Within the enter() function get the result text box by its ID and set its value plus equal to the val parameter being passed in.
//  8.    Create a user-defined function called calculate() that doesn’t accept any arguments. 
//  9.    Within the calculate() function get the result text box by its ID and set its value equal to the calculation currently stored in the result text box. 
 
//  HINT: Use the built-in eval() function to perform the heavy lifting for you.Figure out a way to simplify your code so that you don’t have to manually attach an event handler to each and every button. 
//  You should be able to programmatically attach a listener to every button on the page and attach a handler that listens for the click without having to write so much code. 
//  HINT: Remember the concept of “event bubbling”. Perhaps it makes more sense to listen for an event on a parent element rather than each and every button....

window.addEventListener("load", init); // calls the init function when
                                        // the window is loaded

function init() {
    // Creating anonymous function so we don't write as much
    let $ = function (id) {
        return window.document.getElementById(id);
    };

    // Add event listener to the "container" section
    // that will listen for a click and call the
    // enter function (defined below)
    $("container").addEventListener("click", enter);

    // Add event listener to the "equal" button
    // that will listen for a click and call the
    // calculate function (defined below)
    $("equal").addEventListener("click", calculate);

}

// enter function appends a value to the value in
// the "result" text bar
function enter(val) {
    // this places the "result" text bar into a variable
    // named result
    result = window.document.getElementById("result");

    // Appends the value of the clicked button to the text
    // in the "result" bar (using variable result)
    result.value += val.target.value;
}

function calculate() {
    // this places the "result" text bar into a variable
    // named result
    result = window.document.getElementById("result");

    // Evaluates the mathematical value of the expression
    // found in the "result" text bar and places
    // that value in there (using variable result) 
    result.value = eval(result.value);
}
