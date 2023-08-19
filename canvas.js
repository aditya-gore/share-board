let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// API
let tool = canvas.getContext("2d");
tool.strokeStyle = "red";
tool.lineWidth = "3";

tool.beginPath(); // new graphic (path)
tool.moveTo(10, 10); // start point
tool.lineTo(100, 100); // end point
tool.stroke(); // fill color (fill graphic)
