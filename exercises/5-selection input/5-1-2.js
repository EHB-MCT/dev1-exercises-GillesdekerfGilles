"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {
    for (let i = 0; i < 15000; i++) {
        let y = Math.random() * height;

        if (y < height / 3) {
            context.fillStyle = "red";
        } else if (y < height / 3 * 2) {
            context.fillStyle = "white";
        } else {
            context.fillStyle = "blue";
        }


        Utils.fillCircle(Math.random() * width, y, 5);
    }


}