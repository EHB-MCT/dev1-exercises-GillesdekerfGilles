"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

let frameCount = 0;

let xPos = 0;
let speed = 5;


window.onmousemove = draw;





function draw(eventData) {
    console.log(eventData.x, eventData.y);


    //background
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);


    context.fillStyle = "cyan";

    context.beginPath(eventData.x + 150, eventData.y + 50);
    context.moveTo(50, 50);
    context.lineTo(150, 50);
    context.moveTo(150, 50);
    context.lineTo(150, 70);
    context.moveTo(50, 50);
    context.lineTo(50, 200);
    context.moveTo(50, 200);
    context.lineTo(150, 200);
    context.moveTo(150, 200);
    context.lineTo(150, 150);
    context.moveTo(150, 150);
    context.lineTo(100, 150);

    context.moveTo(200, 50);
    context.lineTo(200, 75);
    context.moveTo(200, 85);
    context.lineTo(200, 200);

    context.moveTo(250, 50);
    context.lineTo(250, 200);
    context.moveTo(250, 200);
    context.lineTo(325, 200);


}