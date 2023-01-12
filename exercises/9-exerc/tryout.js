"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

// always use const for values that will never change == best practice
const quarterWidth = width / 4;
const quarterHeight = height / 4;

const randomShapes = ["triangle", "rectangle", "hexagon", "circle"];
let selectedShape = []; // Empty array, shapes will be pushed by randomShapes()
let score = 0; // needs to be global to prevent reset on every click
let playing = true; //when false, game stops and window needs to be refreshed (see exam instructions)

window.onmousedown = click; // click function is called on every mouse click

setup();

let size = width / 20; // constant size for the shapes (width/20 gives the closest size to the exam example)
context.strokeStyle = "white";

context.lineWidth = size / 2; //line width needs be half the size of the shape (exam instructions)

drawCenteredTriangle(width / 4, height / 4, size);
drawRectangle(width / 4, height / 2 + quarterHeight, size);
drawHexagon(width / 2 + quarterWidth, height / 4, size);
drawCircle(width / 2 + quarterWidth, height / 2 + quarterHeight, size);

size = width / 20;
drawRandomShape();

function setup() {
    // Background (made responsive by only using the width and height of the canvas)

    context.fillStyle = "orange";
    context.fillRect(width / 2, height / 2, width / 2, height / 2);

    context.fillStyle = "red";
    context.fillRect(width / 2, 0, width / 2, height / 2);

    context.fillStyle = "blue";
    context.fillRect(0, height / 2, width / 2, height / 2);

    context.fillStyle = "green";
    context.fillRect(0, 0, width / 2, height / 2);

    backgroundShapes();

    //Draws circle in the middle of the screen (stroke and fill can be used interchangeably, no need to use Utils.xCircle twice)
    context.fillStyle = "white";
    context.strokeStyle = "purple";
    context.lineWidth = 30;
    Utils.fillCircle(width / 2, height / 2, width / 9);
    context.stroke();

    // Display score on the top left
    context.strokeStyle = "white";
    context.font = "bold 60px Arial";
    context.fillStyle = "white";
    context.fillText(score, 5, 55);
}

//draw shapes (note that the x and y coordinates are at the center of the shape and not the top left corner, can be done with moveTo)

// see shapes.jpg for a visual representation of sizes and coordinates (given on exam)

function drawCenteredTriangle(x, y, size) {
    let yHeight = y - size; // Variables like these are optional, but can make the code more readable/time efficient
    context.beginPath();
    context.moveTo(x, yHeight);
    context.lineTo(x + size, yHeight + size * 2);
    context.lineTo(x - size, yHeight + size * 2);
    context.closePath();
    context.stroke();
}

function drawRectangle(x, y, size) {
    let xSize = x + size;
    let ySize = y + size;
    context.beginPath();
    context.moveTo(x, y);
    context.moveTo(xSize, y);
    context.lineTo(xSize, y + size);
    context.lineTo(xSize - size * 2, ySize);
    context.lineTo(xSize - size * 2, ySize - size * 2);
    context.lineTo(xSize, ySize - size * 2);
    context.closePath();
    context.stroke();
}

function drawHexagon(x, y, size) {
    let xSize = x + size;
    let ySize = y + size;
    context.beginPath();
    context.moveTo(x, y);
    context.moveTo(xSize, y);
    context.lineTo(xSize - size / 2, ySize);
    context.lineTo(x - size / 2, ySize);
    context.lineTo(x - size, y);
    context.lineTo(x - size / 2, y - size);
    context.lineTo(xSize - size / 2, y - size);
    context.closePath();
    context.stroke();
}

function drawCircle(x, y, size) {
    context.beginPath();
    context.arc(x, y, size, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
}

// function called once on start and on every click
function drawRandomShape() {
    context.lineWidth = size / 2;

    let randomShape = randomShapes[Utils.randomNumber(0, 3)]; // Declare variable, giving it one of the 4 random shape strings from the array (eg. "triangle")

    selectedShape.push(randomShape); // push the random shape to our empty array (0, 1, 2 or 3)

    console.log(selectedShape); // show the last generated shape in the console

    // if statements to draw the random shape and give it a color depending on the string

    if (randomShape === "triangle") {
        context.strokeStyle = "green";
        drawCenteredTriangle(width / 2, height / 2, size);
    } else if (randomShape === "rectangle") {
        context.strokeStyle = "blue";
        drawRectangle(width / 2, height / 2, size);
    } else if (randomShape === "hexagon") {
        context.strokeStyle = "red";
        drawHexagon(width / 2, height / 2, size);
    } else if (randomShape === "circle") {
        context.strokeStyle = "orange";
        drawCircle(width / 2, height / 2, size);
    }
}

// Looks whether the shape is correct adds points to the score
function checkShape(eventData) {
    // array.shift removes the first element of the array and returns it (in this case the first element is the shape that was just drawn)
    // more info on array.shift: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
    let lastShape = selectedShape.shift();

    /*    a nested if statement (if within an if) to check if playing is still true, if so, add score depending on the shape
   if false, the score will not be added, and the game will end (a circle will be drawn above the middle shapes with each click)
   this is also were the coordinates are checked to see if the shape is in the correct area (again with width and height divided for responsiveness, see background)
 */

    if (playing == true) {
        if (
            eventData.x > width / 2 &&
            eventData.y > height / 2 &&
            lastShape === "circle"
        ) {
            score += 3;
            console.log("down right");
        } else if (
            eventData.x > width / 2 &&
            eventData.y < height / 2 &&
            lastShape === "hexagon"
        ) {
            console.log("right up");
            score += 4;
        } else if (
            eventData.x < width / 2 &&
            eventData.y > height / 2 &&
            lastShape === "rectangle"
        ) {
            console.log("left down");
            score += 1;
        } else if (
            eventData.x < width / 2 &&
            eventData.y < height / 2 &&
            lastShape === "triangle"
        ) {
            console.log("left up");
            score += 2;
        } else {
            playing = false;
        }
    }

    if (playing == false) {
        context.fillStyle = "white";
        context.strokeStyle = "purple";
        context.lineWidth = 30;

        Utils.fillCircle(width / 2, height / 2, width / 9);
        context.stroke();

        context.fillStyle = "purple";
        context.textAlign = "center";

        context.font = "bold" + " " + width / 25 + "px Arial";
        // context.font = "bold 60px Arial";
        context.fillText("WRONG", width / 2, height / 2 + 20);
        console.error("WRONG, Refresh!"); //console.error() is red, console.warn() is yellow, can be used to for better readability in the console
    }

    context.fillStyle = "green";
    context.textAlign = "start";
    context.fillRect(0, 0, 70, 60); // draw a rectangle to cover the previous score (will get messy if score is > 100)
    context.font = "bold 60px Arial";
    context.fillStyle = "white";
    context.fillText(score, 5, 55);
}

// click function that calls the other functions in the right order + draws the circle in the middle first to "remove" the previous shape
function click(eventData) {
    context.lineWidth = 30;
    context.fillStyle = "white";
    context.strokeStyle = "purple";
    Utils.fillCircle(width / 2, height / 2, width / 9);
    context.stroke();

    console.log("You clicked here: X=" + eventData.x + " ,Y=" + eventData.y);

    drawRandomShape();
    checkShape(eventData);
}

// Background shapes made with nested for loops (one for each axis)
function backgroundShapes() {
    context.strokeStyle = Utils.rgba(255, 255, 255, 25);
    context.lineWidth = 7;

    let xPos = 0;
    let y = 30;

    for (let i = 0; i < 10; i++) {
        // increases the x position by 255 each time, so the shapes are evenly spaced

        for (let i = 0; i < 50; i++) {
            //increases the y position by 60 each time

            drawCenteredTriangle(280 + xPos, y, 15);
            drawCenteredTriangle(30 + xPos * 100, y + 60, 15);
            drawHexagon(90 + xPos, y, 15);
            drawRectangle(150 + xPos, y, 15);
            drawCircle(210 + xPos, y, 15);

            y += 60;
        }
        xPos += 255;
        y = 30;
    }
}