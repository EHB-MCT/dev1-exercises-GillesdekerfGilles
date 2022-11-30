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
    context.fillRect(eventData.x / 200, eventData.y, width, 2);
    context.fillRect(eventData.x, eventData.y / 200, 2, width);







}