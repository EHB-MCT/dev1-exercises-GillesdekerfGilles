"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBubbels();
RandomKleur();

function RandomKleur() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
}

function drawBubbels() {
    for (let i = 0; i < 50; i++) {
        let x = Math.floor(Math.random() * width);
        let y = Math.floor(Math.random() * width);
        let random = Math.floor(Math.random() * 70);
        context.beginPath();
        context.ellipse(x, y, random, random, 0, 0, Math.PI * 2);
        RandomKleur();
        context.fill();
    }

}