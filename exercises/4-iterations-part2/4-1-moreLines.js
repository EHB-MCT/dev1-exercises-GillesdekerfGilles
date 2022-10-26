"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
drawRect();
drawLines();


function drawLines() {
    context.strokeStyle = ("white");
    let step = 10;
    let amount = width / step;
    let amounter = height / step;

    for (let i = 0; i < amount; i++) {
        Utils.drawLine((step * i), 0, width - (step * i), height);

    }
    for (let i = 0; i < amounter; i++) {
        Utils.drawLine(0, (step * i), width, height - (step * i));
    }
}

function drawRect() {
    context.beginPath();
    context.rect(0, 0, width, height)
    context.fillStyle = "orange"
    context.stroke();
    context.fill();
}