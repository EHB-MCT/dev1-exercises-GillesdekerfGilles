"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;



let balloons = [];
setup();
draw();



function setup() {

    console.log("setup");
    for (let i = 0; i < 150; i++) {

        let balloon = {
            x: Utils.randomNumber(0, width),
            y: Utils.randomNumber(0, height),
            hue: Utils.randomNumber(0, 80)
        };
        balloons.push(balloon);

    }

}

function draw() {

    console.log(balloons[0]);
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < balloons.length; i++) {


        let balloon = balloons[i];
        balloon.x += Utils.randomNumber(-3, 3);
        balloon.y += Utils.randomNumber(0, -5);

        drawBalloon(balloon.x, balloon.y, balloon.hue);

    }
    requestAnimationFrame(draw);
}

function drawBalloon(x, y, hue) {
    context.fillStyle = Utils.hsl(hue, 100, 50);
    Utils.fillEllipse(x, y, 30, 40);
    context.strokeStyle = "black";
    context.lineWidth = 3;
    Utils.drawLine(x, y + 10, x, y + 50);

}