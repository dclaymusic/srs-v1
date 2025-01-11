// Get the canvas element and set up the context
const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

window.onload = function()
{
  // Start the animation
  animate();
}

// Resize canvas to fill the window
// Set canvas resolution to double the dimensions for higher pixel density
const canvasWidth = 800;
const canvasHeight = 600;
canvas.width = canvasWidth * 2;
canvas.height = canvasHeight * 2;
ctx.scale(2, 2); // Scale drawing operations to fit the doubled resolution


// let strokeSize = 2;

let circle = {
  x: canvasWidth / 2,
  y: canvasHeight / 2,
  radius: 20,
  color: `rgb(74, 179, 109)`,
  alpha: 0.0,
  maxRadius: 200,
  minRadius: 10,
  maxAlpha: 0.6,
  minAlpha: 0,
  alphaChangeRate: 0.01,
  sizeChangeRate: 1.5
}

let rect = {
  x: canvasWidth / 2,
  y: canvasHeight / 2,
  w: 20,
  h: 20,
  color: `rgb(0, 0, 255)`,
  alpha: 0.0,
  maxW: 400,
  minW: 10,
  maxH: 400,
  minH: 10,
  maxAlpha: 0.6,
  minAlpha: 0,
  alphaChangeRate: 0.01,
  sizeChangeRate: 1.5
}


let tri = {
  sideLength: 10,
  minSideLength: 10,
  maxSideLength: 400,
  height: (Math.sqrt(3) / 2) * 10,
  x: canvasWidth / 2,
  y: canvasHeight / 2 - (((Math.sqrt(3) / 2) * 10)/2),
  color: `rgb(255, 0, 0)`,
  alpha: 0.0,
  maxAlpha: 0.6,
  minAlpha: 0,
  alphaChangeRate: 0.01,
  sizeChangeRate: 2.5
}

// Animation loop
function animate() {
  // Clear the canvas, draw background
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = '#EAD4B6';
  ctx.fillRect(0,0,canvasWidth,canvasHeight);

  // Animation Functions
  circleHandler();
  rectHandler();
  triHandler();

  requestAnimationFrame(animate);
}


function circleHandler()
{
  // Gradually increase or decrease the radius of circle
  if (keys["Digit1"]) {
    circle.radius = Math.min(circle.radius + circle.sizeChangeRate, circle.maxRadius);
    circle.alpha = Math.min(circle.alpha + circle.alphaChangeRate, circle.maxAlpha);

  } else {
    circle.radius = Math.max(circle.radius - circle.sizeChangeRate, circle.minRadius);
    circle.alpha = Math.max(circle.alpha - circle.alphaChangeRate, circle.minAlpha);
  }

  //draw circle
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.globalAlpha = circle.alpha;
  ctx.fillStyle = circle.color;
  // ctx.fillStyle = keys["Space"] ? "red" : "blue"; // Change color when spacebar is pressed
  ctx.fill();
  ctx.strokeStyle = "black"; 
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.closePath();
  ctx.globalAlpha = 1.0;

}

function rectHandler()
{
  // Gradually increase or decrease the size of rect
  if (keys["Digit2"]) {
    rect.w = Math.min(rect.w + rect.sizeChangeRate, rect.maxW);
    rect.h = Math.min(rect.h + rect.sizeChangeRate, rect.maxH);
    rect.alpha = Math.min(rect.alpha + rect.alphaChangeRate, rect.maxAlpha);

  } else {
    rect.w = Math.max(rect.w - rect.sizeChangeRate, rect.minW);
    rect.h = Math.max(rect.h - rect.sizeChangeRate, rect.minH);
    rect.alpha = Math.max(rect.alpha - rect.alphaChangeRate, rect.minAlpha);
  }

  //draw rect
  ctx.globalAlpha = rect.alpha;

  ctx.fillStyle = rect.color;
  ctx.fillRect(rect.x-(rect.w/2),rect.y-(rect.h/2),rect.w,rect.h);
  ctx.strokeStyle = "black"; 
  ctx.lineWidth = 4;
  ctx.strokeRect(rect.x-(rect.w/2),rect.y-(rect.h/2),rect.w,rect.h);

  ctx.globalAlpha = 1.0;

}

function triHandler() {

    // Gradually increase or decrease the size of tri
    if (keys["Digit3"]) {
      tri.sideLength = Math.min(tri.sideLength + tri.sizeChangeRate, tri.maxSideLength);
      tri.height = (Math.sqrt(3) / 2) * tri.sideLength;
      tri.y = (canvasHeight/2)-(tri.height/2); 
      tri.alpha = Math.min(tri.alpha + tri.alphaChangeRate, tri.maxAlpha);
  
    } else {
      tri.sideLength = Math.max(tri.sideLength - tri.sizeChangeRate, tri.minSideLength);
      tri.height = (Math.sqrt(3) / 2) * tri.sideLength;
      tri.y = (canvasHeight/2)-(tri.height/2); 
      tri.alpha = Math.max(tri.alpha - tri.alphaChangeRate, tri.minAlpha);
    }

    ctx.globalAlpha = tri.alpha;

    ctx.beginPath();
    ctx.moveTo(tri.x, tri.y); // Top vertex
    ctx.lineTo(tri.x - tri.sideLength / 2, tri.y + tri.height); // Bottom-left vertex
    ctx.lineTo(tri.x + tri.sideLength / 2, tri.y + tri.height); // Bottom-right vertex
    ctx.closePath();
    ctx.strokeStyle = "black"; 
    ctx.lineWidth = 4;
    ctx.stroke();
    

    // Optional: Fill and/or stroke the triangle
    ctx.fillStyle = tri.color; // Fill color
    ctx.fill(); // Fill the triangle
    ctx.globalAlpha = 1.0;

}