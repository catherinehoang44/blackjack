let cardSymbol = [];
let shuffleCards = [];
let compHand = 0;
let playerHand = 0;

let selectedPage = 'menu';

// load in files and images
function preload() {
  // card design images
  cardSymbol[0] = loadImage('data/Clovers.png');
  cardSymbol[1] = loadImage('data/Clubs.png');
  cardSymbol[2] = loadImage('data/Diamonds.png');
  cardSymbol[3] = loadImage('data/Hearts.png');
}

function setup() {
  createCanvas(1280, 720);
  // shuffle cards
  /*for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      shuffleCards[i] = ;
    }
  }*/
}


function draw() {
  if (selectedPage === 'menu') {
    menuPage();
  } else if (selectedPage === 'game') {
    gamePage();
  } else if (selectedPage === 'settings') {
    settingsPage();
  }
}

function menuPage() {
  // background and background designs
  background(220); // grey
  
  // title text
  
  // instructions text
  
  // buttons
  
  // circHitTest
  
}

function gamePage() {
  // header
  // win/lost text
  
  // back to menu button
  
  // settings button
  
  // computer cards
  
  // player cards
  
  // hit and end turn button
}

function settingsPage() {
}

// to check if user clicks rectangular button
function rectHitTest() {
  
}

// to check if user clicks circular button
function circHitTest() {
  
}
