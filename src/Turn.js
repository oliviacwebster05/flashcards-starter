class Turn {
  constructor(guess, card) {
    this.card = card;
    this.guess = guess;
  }
  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer
  }

  giveFeedback() {
    if (this.guess === this.card.correctAnswer) {
  return 'correct!';
  }
  else {
   return 'incorrect!';
  }
   }

  }


module.exports = Turn;
