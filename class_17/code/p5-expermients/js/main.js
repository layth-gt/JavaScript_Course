let num = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  colorMode(HSB);
  //   fill("#000");
  //   stroke("hotpink");
  //   line(10, 100, 50, 10);
  //   ellipse(100, 100, 50);
  //   rect(300, 150, 120, 100);
  //   triangle(120, 120, 80, 160, 160, 160);
}

function draw() {
  //   console.log(num);
  num += 1;
  const randomHue = Math.random() * 360;
  fill(num % 360, 100, 100); //it will get to 360 and gets back to 0
  stroke(num % 360, 100, 100);
  //   ellipse(mouseX, mouseY, Math.random() * 50);
  ellipse(mouseX, mouseY, 10 + num % 20);
}

// function draw() {
//   var randomNum = Math.random();
//   if (randomNum <= 0.34) {
//     ellipse(mouseX, mouseY, 20);
//   } else if (randomNum <= 0.67) {
//     triangle(
//       mouseX - 25,
//       mouseY + 25,
//       mouseY,
//       mouseX - 25,
//       mouseX + 25,
//       mouseX + 25
//     );
//   } else {
//     rect(mouseX, mouseY, 40, 40);
//   }
// }

// function draw() {
//   background("white");
//   line(window.innerWidth / 2, window.innerHeight / 2, mouseX, mouseY);
//   if (mouseIsPressed) {
//     fill("hotpink");
//   } else {
//     fill("#16161d");
//   }
//   ellipse(mouseX, mouseY, 50);
// }
