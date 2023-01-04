"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {
    for (let i = 0; i < 1500; i++) {
        let x = Math.random() * width;

        if (x < width / 2) {
            context.fillStyle = "black";
        }
        Utils.fillCircle(x, Math.random() * height, 2);
    }


}