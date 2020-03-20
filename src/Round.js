const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.start = 0;
    this.end = 0;
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    if (!this.turns) {
      this.start = Date.now();
    }
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
    this.end = Date.now();
    const totalTime = this.end - this.start;
    const minutes = Math.floor(totalTime / 60000);
    const seconds = Math.floor(totalTime / 1000) - (minutes * 60);
    return console.log(`** Round over! ** You answered
    ${this.calculatePercentCorrect()}%
    of the questions correctly! It took you ${minutes} minutes and ${seconds}
    seconds to finish the game!`);
  }
}
module.exports = Round;
