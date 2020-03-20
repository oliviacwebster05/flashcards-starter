const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
  let card1, card2, card3, deck, round;
  beforeEach( () => {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"],
      "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });
  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });
  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });
  it('should return card being played', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });
  it('should be able to take a turn and update turns count', () => {
    expect(round.turns).to.equal(0);
    expect(round.takeTurn('array')).to.equal('incorrect!');
    expect(round.takeTurn('array')).to.equal('correct!');
    expect(round.turns).to.equal(2);
  });
  it('should record incorrect guesses', () => {
    round.takeTurn('array');
    expect(round.incorrectGuesses.length).to.equal(1);
  });
  it('should calculate percent of correct guesses', () => {
    round.takeTurn('array');
    round.takeTurn('array');
    round.takeTurn('mutator method');
    expect(round.calculatePercentCorrect()).to.equal(67);
  });
  it('should be able to end round display message', () => {
    round.takeTurn('array');
    round.takeTurn('array');
    round.takeTurn('mutator method');
    expect(round.endRound()).to.equal(console.log(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly! It took you 0 minutes and 0 seconds to finish the game!`));
  });
})
