const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Card = require('../src/Card');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null;
    this.cards = [];
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
  start() {
    prototypeQuestions.forEach(question => {
      let card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      this.cards.push(card);
    })
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(round);
  }
}

module.exports = Game;
