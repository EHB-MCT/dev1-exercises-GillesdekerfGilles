"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let x = 30;
let y = 10;
drawBubbels();

function hsla(h, s, l, a) {
    return "hsl(" + h + "," + s + "%," + l + "%," + a + "%)";
}


function drawBubbels() {
    for (let i = 0; i < 50; i++) {
        context.beginPath();
        context.ellipse(x, y, 20, 40, 0, Math.PI, 3);
        context.fill();
    }

}