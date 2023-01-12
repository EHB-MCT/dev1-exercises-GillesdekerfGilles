"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeRect(50, 50, 400, 400);

    for (let i = 0; i < 5000; i++) {
        let x = 50 + Math.floor(Math.random() * 396);
        let y = 50 + Math.floor(Math.random() * 396);
        context.fillRect(x, y, 4, 4);
    }
}