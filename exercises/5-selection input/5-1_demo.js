"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {
    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
        if (distance < 100) {
            context.fillStyle = "blue";
        } else {
            context.fillStyle = "red";
        }
        Utils.fillCircle(x, y, 5);
    }

    /* if(distance> 50 && distance < 100) dit is voor een cirkel rond te hebben en niet een volledige */
}
/*
function drawDots() {
    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;

        if (x < width / 2) {
            context.fillStyle = "blue";
        } else {
            context.fillStyle = "red";
        }
        Utils.fillCircle(x, Math.random() * height;, 5);
    }


}*/