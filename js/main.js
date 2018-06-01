//Array with card values
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []

var cardOne = cards[0];
cardsInPlay.push("cardOne");
console.log("User flipped queen");

var cardTwo = cards[2];
cardsInPlay.push("cardTwo");
console.log("User flipped king");

//Game logic to check for matches
if (cardsInPlay.length === 2) {
  if (cardOne === cardTwo) {
    alert("You found a match!");
}
  else {
    alert("Sorry, try again");
}
}
