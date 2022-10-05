"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLines();
drawLinesred()

function drawLines() {
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(50, 200);

    context.lineTo(200, 200);
    context.lineTo(200, 50);
    context.lineTo(50, 50);




    context.lineWidth = "4";

    context.stroke();
}

function drawLinesred() {
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(200, 200);

    context.moveTo(200, 50);
    context.lineTo(50, 200);



    context.lineWidth = "4";
    context.strokeStyle = ("red");

    context.stroke();
}