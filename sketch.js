let classifier;
let video;
let label = "Waiting...";

function preload() {
  classifier = ml5.imageClassifier("MobileNet",
  { flipped: true }
  );
}

function gotResults(results) {
  console.log(results);
  label = results[0].label;
}

function setup() {
  createCanvas(1280, 720);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();
  classifier.classifyStart(video, gotResults);
}

function draw() {
  background(220);
  image(video, 0, 0, width, height);

  //draw the label
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height - 50, width, 50);
  textSize(28);
  fill(255);
  textAlign(CENTER, CENTER);
  noStroke();
  text(label, width / 2, height -50);
}
