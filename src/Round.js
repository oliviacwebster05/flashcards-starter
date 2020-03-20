const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    !turn.evaluateGuess() ? this.incorrectGuesses.push(this.deck[0].id) : '';
    this.deck.shift();
    return turn.giveFeedback();
  }
 calculatePercentCorrect() {
  let incorrect = this.incorrectGuesses.length / this.turns * 100;
  return Math.round(100 - incorrect);
}
 endRound() {
 return console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
}
}
module.exports = Round;
