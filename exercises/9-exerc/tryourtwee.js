/////////////////////////////////////////////////
/* 

No exam link available for this one(locked answers)


TASK:
(Going off memory) => fill the canvas with a  background (semi-randomized colors?) on each button press, then draw a (non-randomized) letter on top of it
(alphabetical order).The Background needs to resize with each button press. (this is technically part two of the exam, the first one swaps letters for numbers,
making the use of an array avoidable, other than that the process is the same)



 => easily remove all comments with the "remove comments" extension 
 => see readme.md for more extensions + shortcuts (and save time during the exam) 


  NOTE: this code is not meant to be learned by hard, the exam will be different,
       it's simply meant as a learning tool or as a solution to compare your own code to.
       I also don't guarantee that this code is the most efficient, it's just a solution that I came up with.
       There are always multiple ways to solve a problem, this is just one of them.

       Also: I put quite a few extra spaces/comments in the code, to make it more readable, the exam will not be 100 lines of code.
*/

/////////////////////////////////////////////////
"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let generatedColors = []; // Empty array, colors will be pushed by the randomColor() function => this way the colors are not randomized on every button press

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // array of all letters in the alphabet (splitting the string into an array)
// More info on array.split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Alternatively, you could use a basic array with all the letters in it, but this is a bit more efficient/readable

let amount = 1; // variable that will be used to determine how many letters and rectangles need to be drawn
let reset = 1; // once reset reaches 26, the game will stop (last letter of alphabet)

setup(); // Makes the start-up background and letter
function setup() {
    addColor(); // function call made to generate and push colors at the start
    context.fillStyle = generatedColors[0];
    context.fillRect(0, 0, width, height);
    context.fillStyle = "black";
    context.textAlign = "center";
    context.font = width / 5 + "px" + " " + "arial"; // responsive fontsize, so it scales with the canvas

    context.fillText(letters[0], width / 2, height / 2);
}

function addColor() {
    for (let i = 0; i < 26; i++) {
        context.fillStyle = Utils.rgb(
            Math.random() * 255,
            Math.random() * 255,
            Math.random() * 255
        );
        generatedColors.push(context.fillStyle); // pushes 25 colors in the array (one for each letter)
    }
    console.log(generatedColors); // hex values of the colors are logged in the console
}

function addLetters(amount) {
    for (let i = 0; i < amount; i++) {
        let rectWidth = width / amount; // optional variable, makes the code a bit more readable
        context.fillStyle = "black";
        context.textAlign = "center";
        context.font = width / (amount * 3) + "px" + " " + "arial"; // fontsize scales with the amount of letters on screen
        context.fillText(letters[i], i * rectWidth + rectWidth / 2, height / 2);
        // loops through the letters array and draws the letters on the canvas
        // x position is determined by the amount of letters on screen and the width of the canvas
    }
}

document.onkeydown = getKey; // event listener for when a any key is pressed

function getKey(e) {
    reset++;
    amount++;
    drawBackground(amount);
    addLetters(amount); // function call made after the rectangles are drawn, so the letters are drawn on top of the rectangles
    if (reset === 26) {
        location.reload(); // reloads the page when the last letter is reached
    }
}

function drawBackground(amount) {
    let rectWidth = width / amount; // optional variable, makes the code a bit more readable

    for (let i = 0; i < amount; i++) {
        // let colors = 0;
        context.fillStyle = generatedColors[i];
        // color gets chosen for every individual rectangle during the loop (on function call, i goes back to 0 when the amount of rectangles changes)

        context.fillRect(i * rectWidth, 0, rectWidth, height);
    }
}