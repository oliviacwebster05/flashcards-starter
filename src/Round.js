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
}
module.exports = Round;
