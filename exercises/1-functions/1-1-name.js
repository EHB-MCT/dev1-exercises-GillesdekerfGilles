"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawName();

function drawName() {
    context.lineWidth = 8;
    context.strokeStyle = ("purple");
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(150, 50);
    context.moveTo(150, 50);
    context.lineTo(150, 70);
    context.moveTo(50, 50);
    context.lineTo(50, 200);
    context.moveTo(50, 200);
    context.lineTo(150, 200);
    context.moveTo(150, 200);
    context.lineTo(150, 150);
    context.moveTo(150, 150);
    context.lineTo(100, 150);

    context.moveTo(200, 50);
    context.lineTo(200, 75);
    context.moveTo(200, 85);
    context.lineTo(200, 200);

    context.moveTo(250, 50);
    context.lineTo(250, 200);
    context.moveTo(250, 200);
    context.lineTo(325, 200);

    context.moveTo(340, 50);
    context.lineTo(340, 200);
    context.moveTo(340, 200);
    context.lineTo(415, 200);
    context.moveTo(440, 50);
    context.lineTo(440, 200);
    context.moveTo(440, 50);
    context.lineTo(525, 50);
    context.moveTo(440, 125);
    context.lineTo(525, 125);
    context.moveTo(440, 125);
    context.lineTo(525, 125);
    context.moveTo(525, 200);
    context.lineTo(440, 200);

    context.moveTo(600, 50);
    context.lineTo(700, 50);
    context.moveTo(600, 50);
    context.lineTo(600, 125);
    context.moveTo(600, 125);
    context.lineTo(700, 125);
    context.moveTo(700, 125);
    context.lineTo(700, 200);
    context.moveTo(700, 200);
    context.lineTo(600, 200);

    context.stroke();

}