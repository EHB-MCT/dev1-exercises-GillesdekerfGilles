"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

Drawrect();

function Drawrect() {
    context.lineWidth = "4";
    context.beginPath();
    context.rect(50, 50, 350, 350);

    context.fillStyle = "lightblue"
    context.stroke();
    context.fill();

    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fillStyle = "lightblue"
    context.stroke();
    context.fill();


    context.beginPath();
    context.rect(100, 50, 250, 250);
    context.fillStyle = "lightblue"
    context.stroke();
    context.fill();

    context.beginPath();
    context.rect(150, 100, 200, 200);
    context.fillStyle = "lightblue"
    context.stroke();
    context.fill();

    context.beginPath();
    context.rect(150, 150, 150, 150);
    context.fillStyle = "lightblue"
    context.stroke();
    context.fill();



}