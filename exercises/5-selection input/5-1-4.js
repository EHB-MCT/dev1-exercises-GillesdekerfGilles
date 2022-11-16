"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {
    for (let i = 0; i < 15000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (x < width / 1.5 && y < height / 1.5) {
            context.fillStyle = "green";
        } else {
            context.fillStyle = "white";
        }
        Utils.fillCircle(x, y, 5);
    }


}