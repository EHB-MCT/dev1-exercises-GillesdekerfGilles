"use strict"

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


let width = context.canvas.width;
let height = context.canvas.height;



square();

function square() {

    context.beginPath();
    context.fillStyle = "darkblue";
    context.fillRect(0, 0, width / 3, height / 1.5);
    context.beginPath();
    context.fillRect(width - 360, 0, width / 3, height / 1.5);
    context.fill();
    context.fillStyle = "red";
    context.fillRect(0, 150, width, height / 3);

    context.fill();

    context.fillStyle = "yellow";
    context.fillRect(0, 509, width / 3, height / 1.5);
    context.beginPath();
    context.fillRect(width - 360, 509, width / 3, height / 1.5);
    context.fill();
    context.stroke();

}