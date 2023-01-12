"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {
    for (let i = 0; i < 15000; i++) {
        let x = Math.random() * width;

        if (x < width / 3) {
            context.fillStyle = "black";
        } else if (x < width / 3 * 2) {
            context.fillStyle = "yellow";
        } else {
            context.fillStyle = "red";
        }
        Utils.fillCircle(x, Math.random() * height, 4);
    }

}