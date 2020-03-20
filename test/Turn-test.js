const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card, turn;
  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('array', card);
  });
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });
  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });
  it('Turn should be instantiated with a card', () => {
    expect(turn.card).to.equal(card);
  });
  it('Turn should be instantiated with a guess', () => {
    expect(turn.guess).to.equal("array");
  });
  it('Should return a guess', () => {
    expect(turn.returnGuess()).to.equal("array");
  });
  it('Should return a card', () => {
    expect(turn.returnCard()).to.equal(card);
  });
  it('Should return false if the guess is false', () => {
    expect(turn.evaluateGuess()).to.equal(false);
  });
  it('Should return true if the guess is true', () => {
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn2 = new Turn('array', card2);
    expect(turn2.evaluateGuess()).to.equal(true);
  });
  it('Should return "incorrect!" if the guess is incorrect', () => {
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
  it('Should return "correct!" if the guess is correct', () => {
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn2 = new Turn('array', card2);
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
})
