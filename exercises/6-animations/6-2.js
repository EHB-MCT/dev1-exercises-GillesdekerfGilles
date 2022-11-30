'use strict';

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


let xPos = 0;
let yPos = 0;
let ySpeed = 5;
let xSpeed = 5;
let frameCount = 0;

let isPlaying = true;
window.onclick = drawCircle;


draw();




function draw() {
    console.log("Draw Loop");
    if (isPlaying) {
        //background
        context.fillStyle = "";
        context.fillRect(0, 0, width / 2, height / 2);
        context.fillStyle = "white";
        context.fillRect(width / 2, 0, width, height / 2);
        context.fillStyle = "white";
        context.fillRect(0, height / 2, width / 2, height / 2);
        context.fillStyle = "white";
        context.fillRect(width / 2, height / 2, width / 2, height / 2);

        context.fillStyle = "white";

        context.lineWidth = 10;
        Utils.fillCircle(width / 2, height / 2, 100);
        context.lineWidth = 10;
        context.strokeStyle = "white";
        context.stroke();
        //update
        if (xPos >= width || xPos < 0) {
            xSpeed = -xSpeed;
        }

        if (yPos >= height || yPos < 0) {
            ySpeed = -ySpeed;
        }

        yPos += ySpeed;
        xPos += xSpeed;

        context.fillStyle = "blue";
        Utils.fillCircle(xPos, yPos, 50);

        frameCount++;

        requestAnimationFrame(draw);
    }



}

function drawCircle(eventData) {
    console.log(eventData.x, eventData.y);

    let distance = Utils.calculateDistance(xPos, yPos, eventData.x, eventData.y);

    console.log(distance);
    if (distance < 70) {
        context.fillStyle = "red";
        isPlaying = false;

        Utils.fillCircle(eventData.x, eventData.y, 20);

    }




}