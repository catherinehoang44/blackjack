// hold card images
let cardSymbol = [];
// will be used to shuffle cards later - let shuffleCards = [];

// 'hand' variables will hold cardSymbol[#] > # means if the card is clubs, clover, etc.,
// 'hand' variables will also hold random card number. (see set up > newGame)
let compHand = [];
let playerHand = [];

// number of cards in hand - looped in function gamePage
let numInCompHand = 2;
let numInPlayerHand = 1;

// number of points in a player's hand
let compPoints = 0;
let playerPoints = 0;

let wins = 0;
let losses = 0;

// design variables
let cardWidth = 80;
let cardHeight = 120;
let cardSpace = 30;
let btnSize = 80;
let titleTextSize = 120;
let instTextSize = 32;

let selectedPage = 'menu';

let result = 'Results Here';

// load in files and images
function preload() {
  // card design images
  cardSymbol[0] = loadImage('data/Clovers.png');
  cardSymbol[1] = loadImage('data/Clubs.png');
  cardSymbol[2] = loadImage('data/Diamonds.png');
  cardSymbol[3] = loadImage('data/Hearts.png');
}

function setup() {
  createCanvas(960, 540);
  newGame();
  // shuffle cards - do later
  /*for (let i = 0; i < 4; i++) {
   for (let j = 1; j < 13; j++) {
   shuffleCards[i] = ;
   }
   }*/
}

function newGame() {
  numInCompHand = 2;
  numInPlayerHand = 1;

  for (let i = 0; i <2; i++) {
    compHand[i] = {cardType: round(random(0, 3)), cardNum: round(random(1, 12))};
    playerHand[i] = {cardType: round(random(0, 3)), cardNum: round(random(1, 12))};
  }
  
  wins = 0;
  losses = 0;
}

// display current page
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
  textFont('Courier');
  textAlign(CENTER, CENTER);
  textSize(titleTextSize);
  text('BLACKJACK', width / 2, height * 0.4);
  // instructions text
  textSize(instTextSize);
  text('Instructions and shit', width / 2, height * 0.4 + titleTextSize / 2);
  
  // buttons
  textSize(20);
  ellipse(width / 2 - btnSize * 0.6, height * 0.4 + titleTextSize + instTextSize / 2, btnSize, btnSize);
  text('Game', width / 2 - btnSize * 0.6, height * 0.4 + titleTextSize + instTextSize / 2);
  ellipse(width / 2 + btnSize * 0.6, height * 0.4 + titleTextSize + instTextSize / 2, btnSize, btnSize);
  text('Settings', width / 2 + btnSize * 0.6, height * 0.4 + titleTextSize + instTextSize / 2);
  // check if user clicks on play game or settings button
  if (mouseIsPressed) {
    circHitTest(mouseX, mouseY, width / 2 - btnSize * 0.6, height * 0.4 + titleTextSize + instTextSize / 2, btnSize / 2, 'game');
    circHitTest(mouseX, mouseY, width / 2 + btnSize * 0.6, height * 0.4 + titleTextSize + instTextSize / 2, btnSize / 2, 'settings');
  }
}

function gamePage() {
  background(220); // grey
  textAlign(LEFT, TOP);
  header();
  
  text(result, 100, 100);

  // computer cards
  imageMode(CENTER, CENTER);
  let x = width / 2 - cardWidth / 2;
  compPoints = 0;
  for (let i = 0; i < numInCompHand; i ++) {
    image(cardSymbol[compHand[i].cardType], x, height / 2 - cardHeight / 2, cardWidth, cardHeight);
    text(compHand[i].cardNum, x - cardSpace, height / 2 - cardHeight / 2 - cardSpace);
    compPoints += compHand[i].cardNum;
    x += cardSpace;
  }
  text('Comp Total: ' + compPoints, width / 2, height / 2 - cardSymbol[compHand[1].cardType].height / 2 - cardSpace);
  
  // player cards
  x = width / 2 - cardWidth / 2;
  playerPoints = 0;
  for (let i = 0; i < numInPlayerHand; i ++) {
    image(cardSymbol[playerHand[i].cardType], x, height / 2 + cardHeight / 2, cardWidth, cardHeight);
    text(playerHand[i].cardNum, x - cardSpace, height / 2 + cardHeight / 2 - cardSpace);
    x += cardSpace;
    playerPoints += playerHand[i].cardNum;
  }
  text('Player Total: ' + playerPoints, width / 2, height / 2 + cardSymbol[compHand[1].cardType].height / 2 - cardSpace);

  // hit and end turn button
  rect(width / 2 - 190, height - 40 - 60, 180, 60);
  text('Hit', width / 2 - 190, height - 40 - 60, 180, 60);
  rect(width / 2 + 10, height - 40 - 60, 180, 60);
  text('End Turn', width / 2 + 10, height - 40 - 60, 180, 60);
}

// header for games page
function header() {
  noStroke();
  fill(255); // white
  rect(0, 0, width, 80);

  // back to menu button
  strokeWeight(1);
  stroke(0); 
  rect(40, 10, 60, 60);
  text('Home', 40, 10);
  // win/lost text
  noStroke();
  fill(0);
  text('Wins: ' + wins + '   Losses: ' + losses, 140, 80 / 2 + 5);
  // settings button
  noFill();
  strokeWeight(1);
  stroke(0); 
  rect(width - 40 - 60, 10, 60, 60);
  text('Settings', width - 40 - 60, 10);
  // check if user pressed home or settings button
  if (mouseIsPressed) {
    rectHitTest(mouseX, mouseY, 40, 10, 60, 60, 'menu');
    rectHitTest(mouseX, mouseY, width - 40 - 60, 10, 60, 60, 'settings');
  }
}

function settingsPage() {
  background(220); // grey
  // select card pack design
  textAlign(CENTER, CENTER);
  text('Card Pack Designs:', width / 2, 80);
  rect(width / 2 - 90, height / 2 - 160, 80, 120);
  rect(width / 2 + 10, height / 2 - 160, 80, 120);
  // change volume
  // button design changes everytime you press on it > design shows level of volume
  ellipse(width / 2, height / 2 + 40, 80, 80);
  text('volume', width / 2, height / 2 + 40);
  // back buttons
  rect(width / 2 - 190, height - 40 - 60, 180, 60);
  text('Back to Menu', width / 2 - 190, height - 40 - 60, 180, 60);
  rect(width / 2 + 10, height - 40 - 60, 180, 60);
  text('Back to Game', width / 2 + 10, height - 40 - 60, 180, 60);
  if (mouseIsPressed) {
    rectHitTest(mouseX, mouseY, width / 2 - 190, height - 40 - 60, 180, 60, 'menu');
    rectHitTest(mouseX, mouseY, width / 2 + 10, height - 40 - 60, 180, 60, 'game');
  }
}

function mousePressed() {
  // check if user pressed hit or end turn buttons on game page
  if (selectedPage === 'game') {
    rectHitTest(mouseX, mouseY, width / 2 - 190, height - 40 - 60, 180, 60, 'hit');
    rectHitTest(mouseX, mouseY, width / 2 + 10, height - 40 - 60, 180, 60, 'endturn');
  }
}

// to check if user clicks rectangular button
function rectHitTest(mX, mY, x, y, w, h, buttonFunction) {
  if (buttonFunction === 'hit' && mX > x && mX < x + w && mY > y && mY < y + h) {
    if (true) {
    playerHand[numInPlayerHand] = {cardType: round(random(0, 3)), cardNum: round(random(1, 12))};
    numInPlayerHand++;
    }
    //okay for some reason, once the card is added, it doesnt make it to the if statement :/
    // check if playerPoints > 21. if it is, computer wins
    if (playerPoints > 21) {
      results = 'You Lose :(';
      losses++;
    }
  } else if (buttonFunction === 'endturn' && mX > x && mX < x + w && mY > y && mY < y + h) {
    // end turn so computer plays 
    // keep on drawing a card until comPoints >= 217
    if (compPoints < 17) {
        compHand[numInCompHand] = {cardType: round(random(0, 3)), cardNum: round(random(1, 12))};
        numInCompHand++;
    }
    // calculates the winner
    if (compPoints > 21){
      results = 'You Win :)';
      wins++;
    } else if (compPoints >= playerPoints) {
      results = 'You Lose :(';
      losses++;
    } else {
      results = 'You Win :)';
      wins++;
    }
      
    // if compPoints === 21, comp wins
    // if compPoints > 21, player wins
    // if both equal to 21, a tie
    // display winner/tie and tally it in variables 'wins' or 'losses' (i.e. wins++;)
  } else if (buttonFunction === 'menu' && mX > x && mX < x + w && mY > y && mY < y + h) {
    selectedPage = buttonFunction;
  } else if (buttonFunction === 'settings' && mX > x && mX < x + w && mY > y && mY < y + h) {
    selectedPage = buttonFunction;
  } else if (buttonFunction === 'game' && mX > x && mX < x + w && mY > y && mY < y + h) {
    selectedPage = buttonFunction;
  }
}

// to check if user clicks circular button
function circHitTest(mX, mY, x, y, r, toPage) {
  if (r > dist(mX, mY, x, y)) {
    selectedPage = toPage;
  }
}
