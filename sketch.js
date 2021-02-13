// Copyright (c) 2018 ml5
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Style Transfer Image Example using p5.js
This uses a pre-trained model of The Great Wave off Kanagawa and Udnie (Young American Girl, The Dance)
=== */

let inputImg1;
let inputImg2;
let inputImg3;
let statusMsg;
let transferBtn;

let style2;

function setup() {
  noCanvas();
  // Status Msg
  statusMsg = select('#statusMsg');

  // Get the input image
  resultImg = createImg('');
  inputImg1 = select('#inputImg1');
  inputImg2 = select('#inputImg2');
  inputImg3 = select('#inputImg3');
  // Transfer Button
  transferBtn = select('#transferBtn')
  transferBtn.mousePressed(transferImages);

  // Create two Style methods with different pre-trained models

  style = ml5.styleTransfer('models/va', modelLoaded);
}

// A function to be called when the models have loaded
function modelLoaded() {
  // Check if both models are loaded
  if(style.ready){
    statusMsg.html('Ready!')
  }
}

// Apply the transfer to both images!
function transferImages() {
  statusMsg.html('Applying Style Transfer...!');
  
  style.transfer(inputImg1, function(err, result1) {
    createImg(result1.src).parent('img1T');
  });

  style.transfer(inputImg2, function(err, result2) {
    createImg(result2.src).parent('img2T');
  });

  style.transfer(inputImg3, function(err, result3) {
    createImg(result3.src).parent('img3T');
  });

  statusMsg.html('Done!');
}