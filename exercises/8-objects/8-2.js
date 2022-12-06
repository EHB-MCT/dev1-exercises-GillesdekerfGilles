"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let balls = [];
let amount = 20;
let maxSize = 50;
setup();
draw();

function setup() {

    console.log("setup");
    for (let i = 0; i < amount; i++) {
        let ball = {
            x: Utils.randomNumber(maxSize, width - maxSize),
            y: Utils.randomNumber(maxSize, height - maxSize),
            ySpeed: Utils.randomNumber(-10, 10),
            xSpeed: Utils.randomNumber(-10, 10),
            size: Utils.randomNumber(15, 50),
            hue: Utils.randomNumber(0, 360)
        };
        balls.push(ball);

    }
}

function draw() {

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        //draw background
        //update pos 
        ball.x += ball.xSpeed;
        ball.y += ball.ySpeed;

        //check pos 
        if (ball.x >= (width - ball.size) || ball.x < ball.size) {
            ball.xSpeed = -ball.xSpeed;
        }

        if (ball.y >= (height - ball.size) || ball.y < ball.size) {
            ball.ySpeed = -ball.ySpeed;
        }
        //draw ball
        context.fillStyle = Utils.hsl(ball.hue, 50, 50);
        Utils.fillCircle(ball.x, ball.y, ball.size);

    }



    requestAnimationFrame(draw);
}