"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
drawDots();

function drawDots() {
    for (let i = 0; i < 15000; i++) {
        let x = Math.random() * width;

        if (x < width / 5) {
            context.fillStyle = "red";
        } else if (x > width / 5 * 4) {
            context.fillStyle = "yellow";
        } else {
            context.fillStyle = "white";
        }
        Utils.fillCircle(x, Math.random() * height, 5);
    }


}