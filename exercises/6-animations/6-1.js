"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

document.onmousemove = move;

/**
 * 
 * @param {MouseEvent} 
 */
function move(e) {
    console.log(e.pageX, e.pageY);
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(e.pageX, 0);
    context.lineTo(e.pageX, height);
    context.moveTo(0, e.pageY);
    context.lineTo(width, e.pageY);
    context.stroke();
}