"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
drawMaze();

function drawMaze() {
    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 2);
        context.lineWidth = 5;
        console.log(random);
        if (random == 0) {
            Utils.drawLine(0, 0, 10, 10);
        } else {
            Utils.drawLine(0, 10, 10, 0);
        }

    }


}