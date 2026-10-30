/*
   Description: Lesson 7 - For Loops example
   Author: Mr. Kowalczewski
   Date of last edit: October 28, 2026
*/

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(200);

  // ----- Without a loop -----
  // five rectangles, written out one at a time
  // rect(50, 350, 100, 100);
  // rect(200, 350, 100, 100);
  // rect(350, 350, 100, 100);
  // rect(500, 350, 100, 100);
  // rect(650, 350, 100, 100);

  // ----- With a for loop -----
  // initial value; condition; pattern
  fill(255);
  for (let xValue = 50; xValue <= 650; xValue += 150) {
    fill(xValue / 650 * 255);
    rect(xValue, 350, 100, 100);
  }

  

  // what is wrong with this loop?
  for (let xValue = 650; xValue > 0; xValue -= 150) {
    ellipse(xValue, 500, 50, 50);
  }
}
