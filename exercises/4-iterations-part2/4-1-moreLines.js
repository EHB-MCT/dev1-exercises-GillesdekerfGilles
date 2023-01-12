"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
drawRect();
drawLines();


function drawLines() {
    context.lineWidth = "2";
    context.strokeStyle = ("white");
    let step = 25;
    let amount = width / step;


    for (let i = 0; i < amount; i++) {
        Utils.drawLine((step * i), 0, width - (step * i), height);
        Utils.drawLine(0, (step / 1.875 * i), width, height - (step / 1.875 * i));
        console.log();
    }
}

function drawRect() {
    context.beginPath();
    context.rect(0, 0, width, height)
    context.fillStyle = "green"
    context.stroke();
    context.fill();
}