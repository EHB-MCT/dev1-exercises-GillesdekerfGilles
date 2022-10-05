"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawRects();

function drawRects() {
    context.beginPath();
    context.rect(50, 50, 300, 300)
    context.strokeStyle = ("red");
    context.stroke();



    context.beginPath();
    context.rect(350, 350, 300, 300)
    context.strokeStyle = ("red");
    context.stroke();

    context.beginPath();
    context.rect(200, 200, 300, 300)

    context.strokeStyle = ("red");
    context.fillStyle = "black";
    context.stroke();
    context.fill();

    context.beginPath();
    context.rect(100, 500, 100, 100)
    context.rect(500, 100, 100, 100)
    context.strokeStyle = ("red");
    context.stroke();

    context.beginPath();
    context.rect(600, 50, 50, 50)
    context.rect(50, 600, 50, 50)

    context.strokeStyle = ("red");
    context.fillStyle = "black";
    context.stroke();
    context.fill();
}