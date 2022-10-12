"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


square();

function RandomKleur() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
}

function square() {


    let x = 500;
    let y = 200;
    let width = 400;
    let height = 400;

    let random = Math.floor(Math.random() * 255);
    console.log(random);

    context.beginPath();
    context.rect(x, y, width, height);
    RandomKleur();
    context.fill();

    context.beginPath();
    context.rect(x + 25, y + 25, width - 50, height - 50);
    RandomKleur();
    context.fill();
    context.beginPath();
    context.rect(x + 50, y + 50, width - 100, height - 100);
    RandomKleur();
    context.fill();
    context.beginPath();
    context.rect(x + 75, y + 75, width - 150, height - 150);
    RandomKleur();
    context.fill();

    context.beginPath();
    context.rect(x + 100, y + 100, width - 200, height - 200);
    RandomKleur();
    context.fill();
    context.beginPath();
    context.rect(x + 125, y + 125, width - 250, height - 250);
    RandomKleur();
    context.fill();
    context.beginPath();
    context.rect(x + 150, y + 150, width - 300, height - 300);
    RandomKleur();
    context.fill();
    context.beginPath();
    context.rect(x + 175, y + 175, width - 350, height - 350);
    RandomKleur();
    context.fill();


}