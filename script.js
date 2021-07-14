// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let buttonDiv;
let trainButton;

// Global ML Variables
//let model;

function setup() {

}

function draw() {

}

function buildButtons() {

}

function createMusicSystem() {
  env = new p5.Envelope();
  env.setADSR(0.05, 0.1, 0.5, 1);
  env.setRange(1.2, 0);
  wave = new p5.Oscillator();
  wave.setType("sine");
  wave.start();
  wave.freq(440);
  wave.amp(env);
}

function trainModel() {

}

function whileTraining(epoch, loss) {

}

function finishedTraining() {

}

function drawNote(note, noteColor, ellipseColor) {

}

function canvasClicked() {

}

function gotResults(error, results) {

}
